var uuid = require('uuid');
var path = require('path');

var conversationBuilder = function(conversationPath) {
  if (conversationPath[0] !== '/')
    conversationPath = '/' + conversationPath;

  let conversationName = conversationPath.substr(1);

  return {
    _steps: [],
    _accept: null,
    _expiration: 60 * 1000,
    _conversationName: conversationName,
    _conversationPath: conversationPath,

    expiration(length) {
      this._expiration = length;
      return this;
    },

    step(stepPath, stepHandler) {
      this._steps.push({
        path: stepPath,
        handler: stepHandler
      });

      return this;
    },

    mount: mount
  };
};

function mount(app) {

  // Ensure conversations store is created
  app.use(this._conversationPath, (req, res, next) => {
    if (req.session.conversations === undefined) {
      req.session.conversations = {};
    }

    next();
  });

  // New conversation
  app.get(this._conversationPath, (req, res) => {
    let newConversationId = uuid();
    req.session.conversations[newConversationId] = {
      _id: newConversationId,
      _expires: new Date(Date.now() + this._expiration)
    };

    let firstStepPath = path.join(req.baseUrl, this._conversationPath, newConversationId, this._steps[0].path);
    res.redirect(firstStepPath);
  });

  // Bind and validate conversation object
  app.param('conversationId', (req, res, next, conversationId) => {
    if (req.session.conversations[conversationId] === undefined) {
      res.redirect('/');
      return;
    }

    let conversation = req.session.conversations[conversationId];

    if (new Date() > conversation._expires) {
      res.redirect('/');
      return;
    }

    conversation._expires = new Date(Date.now() + this._expiration); // update conversation expiration timestamp
    req.conversation = conversation; // bind conversation as req object attribute
    next();
  });

  // mount steps
  this._steps.forEach((step, idx, steps) => {

    app.get(path.join(this._conversationPath, ':conversationId', step.path), (req, res) => {
      res.render(path.join(this._conversationName, step.path), {
        conversation: req.conversation,
        stepData: req.conversation[step.path] });
    });

    app.post(path.join(this._conversationPath, ':conversationId', step.path), (req, res) => {
      req.conversation[step.path] = req.body;

      step.handler(req, res, req.conversation);

      if (idx < steps.length - 1) { // conversation has next step
        let nextStep = steps[idx + 1];
        res.redirect(path.join(this._conversationPath, req.conversation._id, nextStep.path));
        return;
      }

      // last step in conversation

      // remove conversation
      req.session.conversations[req.conversation._id] = undefined;

      res.redirect('/'); // go to main page
    });
  });
}

module.exports = conversationBuilder;
