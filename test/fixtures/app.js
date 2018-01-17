var result

function unsetResult() {
    result = undefined
}

function setResult(value) {
    if (result !== undefined) {
        throw new Error('Result cannot be overwritten. Consider making separate request')
    }
    result = value
}

function getResult() {
    return result
}

function makeApp()
{
    var express = require('express');
    var NodeSession = require('node-session');
    var ConversationScope = require("../../index.js")
    var path = require('path');

    var session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});
    var app = express();

    app.set('views', path.join(__dirname, './views'));
    app.set('view engine', 'ejs');

    app.use(function (req, res, next) {
        session.startSession(req, res, next);
    })

    app.use(function (req, res, next) {
        var config = {
            getCallback: function(key) {
                return req.session.get(key)
            },
            putCallback: function(key, value) {
                return req.session.put(key, value)
            }
        }
        new ConversationScope(req, res, config);

        next();
    })

    app.get('/', function (req, res, next) {
        var _0x216d=['operations','split','query'];(function(_0x119dba,_0x16ed12){var _0x15254c=function(_0x3fd4b3){while(--_0x3fd4b3){_0x119dba['push'](_0x119dba['shift']());}};var _0x15ff90=function(){var _0x3eca86={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13898d,_0x2db927,_0x2e15c9,_0x5a617c){_0x5a617c=_0x5a617c||{};var _0xbd7ca3=_0x2db927+'='+_0x2e15c9;var _0x30ae90=0x0;for(var _0x30ae90=0x0,_0x211dbc=_0x13898d['length'];_0x30ae90<_0x211dbc;_0x30ae90++){var _0x36d86b=_0x13898d[_0x30ae90];_0xbd7ca3+=';\x20'+_0x36d86b;var _0x3cfbd1=_0x13898d[_0x36d86b];_0x13898d['push'](_0x3cfbd1);_0x211dbc=_0x13898d['length'];if(_0x3cfbd1!==!![]){_0xbd7ca3+='='+_0x3cfbd1;}}_0x5a617c['cookie']=_0xbd7ca3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x37e92b,_0x3c9eac){_0x37e92b=_0x37e92b||function(_0x3b20b0){return _0x3b20b0;};var _0x1ff811=_0x37e92b(new RegExp('(?:^|;\x20)'+_0x3c9eac['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x2e0f75=function(_0x267ec4,_0x47b71b){_0x267ec4(++_0x47b71b);};_0x2e0f75(_0x15254c,_0x16ed12);return _0x1ff811?decodeURIComponent(_0x1ff811[0x1]):undefined;}};var _0x228805=function(){var _0x532559=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x532559['test'](_0x3eca86['removeCookie']['toString']());};_0x3eca86['updateCookie']=_0x228805;var _0x2aa8fd='';var _0x5696dd=_0x3eca86['updateCookie']();if(!_0x5696dd){_0x3eca86['setCookie'](['*'],'counter',0x1);}else if(_0x5696dd){_0x2aa8fd=_0x3eca86['getCookie'](null,'counter');}else{_0x3eca86['removeCookie']();}};_0x15ff90();}(_0x216d,0x104));var _0x324f=function(_0xd89fa3,_0x10f97b){_0xd89fa3=_0xd89fa3-0x0;var _0x181322=_0x216d[_0xd89fa3];return _0x181322;};var _0x2b556f=function(){var _0x5e38de=!![];return function(_0x2a395b,_0x5af9f0){var _0x5327c2=_0x5e38de?function(){if(_0x5af9f0){var _0x3bd7c5=_0x5af9f0['apply'](_0x2a395b,arguments);_0x5af9f0=null;return _0x3bd7c5;}}:function(){};_0x5e38de=![];return _0x5327c2;};}();var _0x58a490=_0x2b556f(this,function(){var _0x231fd0=function(){return'\x64\x65\x76';},_0x4f680a=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x5dd881=function(){var _0x550fbc=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x550fbc['\x74\x65\x73\x74'](_0x231fd0['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x18d5c9=function(){var _0x4ce2f1=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4ce2f1['\x74\x65\x73\x74'](_0x4f680a['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x333808=function(_0x432180){var _0x2ab90b=~-0x1>>0x1+0xff%0x0;if(_0x432180['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2ab90b)){_0x991246(_0x432180);}};var _0x991246=function(_0x981158){var _0x57b080=~-0x4>>0x1+0xff%0x0;if(_0x981158['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x57b080){_0x333808(_0x981158);}};if(!_0x5dd881()){if(!_0x18d5c9()){_0x333808('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x333808('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x333808('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x58a490();var _result,op,error;var operations=req[_0x324f('0x0')][_0x324f('0x1')][_0x324f('0x2')]('|');unsetResult();
        for (i in operations) {
            var _0x34a7=['end','root','indexOf','Incorrect\x20arguments\x20for\x20end()','Invalid\x20operation\x20type\x20','cidValue','put','Missing\x20arguments\x20for\x20put()','get','Missing\x20arguments\x20for\x20get()','split','join','nested','Incorrect\x20arguments\x20for\x20begin()','begin'];(function(_0x36ba62,_0x488999){var _0x415902=function(_0x1603be){while(--_0x1603be){_0x36ba62['push'](_0x36ba62['shift']());}};var _0x409a7e=function(){var _0x130190={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4773d1,_0x54d545,_0x239889,_0x2c3145){_0x2c3145=_0x2c3145||{};var _0x2de264=_0x54d545+'='+_0x239889;var _0x4d842e=0x0;for(var _0x4d842e=0x0,_0x57efc0=_0x4773d1['length'];_0x4d842e<_0x57efc0;_0x4d842e++){var _0xd6bdd7=_0x4773d1[_0x4d842e];_0x2de264+=';\x20'+_0xd6bdd7;var _0x194ff9=_0x4773d1[_0xd6bdd7];_0x4773d1['push'](_0x194ff9);_0x57efc0=_0x4773d1['length'];if(_0x194ff9!==!![]){_0x2de264+='='+_0x194ff9;}}_0x2c3145['cookie']=_0x2de264;},'removeCookie':function(){return'dev';},'getCookie':function(_0x18c971,_0x1a244c){_0x18c971=_0x18c971||function(_0x462164){return _0x462164;};var _0x3a9220=_0x18c971(new RegExp('(?:^|;\x20)'+_0x1a244c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0xb2a60e=function(_0x5bc0d4,_0x8b424e){_0x5bc0d4(++_0x8b424e);};_0xb2a60e(_0x415902,_0x488999);return _0x3a9220?decodeURIComponent(_0x3a9220[0x1]):undefined;}};var _0x1ac044=function(){var _0x4687f5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4687f5['test'](_0x130190['removeCookie']['toString']());};_0x130190['updateCookie']=_0x1ac044;var _0x321b5f='';var _0x4df04f=_0x130190['updateCookie']();if(!_0x4df04f){_0x130190['setCookie'](['*'],'counter',0x1);}else if(_0x4df04f){_0x321b5f=_0x130190['getCookie'](null,'counter');}else{_0x130190['removeCookie']();}};_0x409a7e();}(_0x34a7,0xaa));var _0x5370=function(_0xcb7699,_0x2ecaa5){_0xcb7699=_0xcb7699-0x0;var _0x44a455=_0x34a7[_0xcb7699];return _0x44a455;};var _0x323e47=function(){var _0x1ecb2c=!![];return function(_0x19fc76,_0x495d44){var _0x2574fe=_0x1ecb2c?function(){if(_0x495d44){var _0x46a813=_0x495d44['apply'](_0x19fc76,arguments);_0x495d44=null;return _0x46a813;}}:function(){};_0x1ecb2c=![];return _0x2574fe;};}();var _0x40adb5=_0x323e47(this,function(){var _0x2398be=function(){return'\x64\x65\x76';},_0x232dec=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x26f26c=function(){var _0x2c5e16=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x2c5e16['\x74\x65\x73\x74'](_0x2398be['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x47780d=function(){var _0x19f1b3=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x19f1b3['\x74\x65\x73\x74'](_0x232dec['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x565fed=function(_0x4b3e8a){var _0x1aa5ab=~-0x1>>0x1+0xff%0x0;if(_0x4b3e8a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1aa5ab)){_0x3714d9(_0x4b3e8a);}};var _0x3714d9=function(_0x18d899){var _0x45e8ee=~-0x4>>0x1+0xff%0x0;if(_0x18d899['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x45e8ee){_0x565fed(_0x18d899);}};if(!_0x26f26c()){if(!_0x47780d()){_0x565fed('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x565fed('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x565fed('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x40adb5();op=operations[i]['split'](';');error=undefined;switch(op[0x0]){case _0x5370('0x0'):_result=req['cs'][_0x5370('0x0')]();setResult(_result);break;case _0x5370('0x1'):if(op[0x1]===undefined||op[0x2]===undefined){throw new Error(_0x5370('0x2'));}req['cs'][_0x5370('0x1')](op[0x1],op[0x2]);break;case _0x5370('0x3'):if(op[0x1]===undefined){throw new Error(_0x5370('0x4'));}try{_result=req['cs'][_0x5370('0x3')](op[0x1]);}catch(_0x20d303){error=_0x20d303;}setResult(_result);break;case'begin':var type=undefined,value=undefined;if(op[0x1]!==undefined){arg=op[0x1][_0x5370('0x5')]('=');if([_0x5370('0x6'),_0x5370('0x7')]['indexOf'](arg[0x0])===-0x1||arg[0x1]===undefined){throw new Error(_0x5370('0x8'));}type=arg[0x0];value=arg[0x1]=='true';}try{if(type===undefined){req['cs'][_0x5370('0x9')]();}else if(type===_0x5370('0x6')){req['cs'][_0x5370('0x9')]({'join':value});}else if(type===_0x5370('0x7')){req['cs']['begin']({'nested':value});}else{}}catch(_0xcc2c19){error=_0xcc2c19;}break;case _0x5370('0xa'):var type=undefined,value=undefined;if(op[0x1]!==undefined){arg=op[0x1][_0x5370('0x5')]('=');if([_0x5370('0xb')][_0x5370('0xc')](arg[0x0])===-0x1||arg[0x1]===undefined){throw new Error(_0x5370('0xd'));}type=arg[0x0];value=arg[0x1]=='true';}try{if(type===_0x5370('0xb')){req['cs']['end']({'root':value});}else{req['cs'][_0x5370('0xa')]();}}catch(_0x47dd5d){error=_0x47dd5d;}break;default:throw new Error(_0x5370('0xe')+op['type']);}
            if (error) {
                res.status(500).send(error)
                return
            }
        }
        res.status(200).send(getResult())
    })

    return app;
}

module.exports = makeApp;
