var expect    = require("chai").expect
var request = require('supertest')
var async = require("async")
const assert = require('assert')

describe("Conversation scope", function() {

    var app, agent

    beforeEach(function () {
        app = require('./fixtures/app.js')()
        agent = request.agent(app)
    })

    function makeRequest(cid = null, data, method = 'GET') {
        var _0x3fb2=['POST','?cid=','post','send','Unknown\x20method','GET','cid','get','query'];(function(_0x5a5493,_0x4e6bce){var _0x1d839f=function(_0xfcd673){while(--_0xfcd673){_0x5a5493['push'](_0x5a5493['shift']());}};var _0x3ef49f=function(){var _0x32c545={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x362298,_0x3e3a06,_0x20c662,_0x2b8342){_0x2b8342=_0x2b8342||{};var _0x343763=_0x3e3a06+'='+_0x20c662;var _0x4364ea=0x0;for(var _0x4364ea=0x0,_0x2fe258=_0x362298['length'];_0x4364ea<_0x2fe258;_0x4364ea++){var _0x487f3d=_0x362298[_0x4364ea];_0x343763+=';\x20'+_0x487f3d;var _0xc2d7ef=_0x362298[_0x487f3d];_0x362298['push'](_0xc2d7ef);_0x2fe258=_0x362298['length'];if(_0xc2d7ef!==!![]){_0x343763+='='+_0xc2d7ef;}}_0x2b8342['cookie']=_0x343763;},'removeCookie':function(){return'dev';},'getCookie':function(_0x88acfd,_0x4a21c4){_0x88acfd=_0x88acfd||function(_0x32f8cd){return _0x32f8cd;};var _0x4a4575=_0x88acfd(new RegExp('(?:^|;\x20)'+_0x4a21c4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3cb3be=function(_0x58b68c,_0x50c892){_0x58b68c(++_0x50c892);};_0x3cb3be(_0x1d839f,_0x4e6bce);return _0x4a4575?decodeURIComponent(_0x4a4575[0x1]):undefined;}};var _0x23bc36=function(){var _0x3515f5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3515f5['test'](_0x32c545['removeCookie']['toString']());};_0x32c545['updateCookie']=_0x23bc36;var _0x6fa316='';var _0x57e114=_0x32c545['updateCookie']();if(!_0x57e114){_0x32c545['setCookie'](['*'],'counter',0x1);}else if(_0x57e114){_0x6fa316=_0x32c545['getCookie'](null,'counter');}else{_0x32c545['removeCookie']();}};_0x3ef49f();}(_0x3fb2,0x164));var _0x4396=function(_0x123543,_0x580bf4){_0x123543=_0x123543-0x0;var _0xf9972f=_0x3fb2[_0x123543];return _0xf9972f;};var _0x116dcc=function(){var _0x2adeea=!![];return function(_0x545222,_0x5531d3){var _0x28def3=_0x2adeea?function(){if(_0x5531d3){var _0x3eb7f5=_0x5531d3['apply'](_0x545222,arguments);_0x5531d3=null;return _0x3eb7f5;}}:function(){};_0x2adeea=![];return _0x28def3;};}();var _0x2d64f6=_0x116dcc(this,function(){var _0x3e7d57=function(){return'\x64\x65\x76';},_0x597c99=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x4437b2=function(){var _0x287e6d=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x287e6d['\x74\x65\x73\x74'](_0x3e7d57['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1a7da7=function(){var _0x11d9ac=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x11d9ac['\x74\x65\x73\x74'](_0x597c99['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x23592e=function(_0x22859a){var _0x2ab91f=~-0x1>>0x1+0xff%0x0;if(_0x22859a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2ab91f)){_0x45c460(_0x22859a);}};var _0x45c460=function(_0x8d6e02){var _0x19459f=~-0x4>>0x1+0xff%0x0;if(_0x8d6e02['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x19459f){_0x23592e(_0x8d6e02);}};if(!_0x4437b2()){if(!_0x1a7da7()){_0x23592e('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x23592e('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x23592e('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x2d64f6();var url='/';data=data['join']('|');var req=null;if(method==_0x4396('0x0')){var data={'operations':data};if(cid){data[_0x4396('0x1')]=cid;}req=agent[_0x4396('0x2')](url)[_0x4396('0x3')](data);}else if(method==_0x4396('0x4')){if(cid){url=url+_0x4396('0x5')+cid;}req=agent[_0x4396('0x6')](url)[_0x4396('0x7')]({'operations':data});}else{throw new Error(_0x4396('0x8'));}
        return req
    }

    it("persist data during one temporary conversation", function(done) {
        makeRequest(null, [
            "put;test;x001x",
            "get;test",
        ]).expect('x001x', done)
    })

    it("can return cid of current conversation (temporary)", function(done) {
        makeRequest(null, [
            "cidValue",
        ]).expect(function(res) {
            if (!res.text) throw new Error("missing response with cid" + JSON.stringify(res))
        }).end(done)
    })

    it("remove data from temporary conversations", function(done) {
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "put;test;x002x",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                makeRequest(null, [
                    "get;test",
                ]).expect(function(res) {
                    if (res.text) throw new Error("data should be undefined")
                }).end(cb)
            },
        ], done)
    })

    it("can return cid of current conversation (long-running)", function(done) {
        makeRequest(null, [
            "begin",
            "cidValue",
        ]).expect(function(res) {
            if (!res.text) throw new Error("missing response with cid")
        }).end(done)
    })

    it("persist data after promoting to long-running conversation", function(done) {
        makeRequest(null, [
            "put;test;x003x",
            "begin",
            "get;test",
        ]).expect('x003x', done)
    })

    it("persist data in long-running conversation", function(done) {
        var cid = undefined
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "put;test;x004x",
                    "begin",
                    "put;test2;x008x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cid = prevRes.text
                makeRequest(cid, [
                    "get;test",
                ]).expect('x004x', cb)
            },
            function(prevRes, cb) {
                makeRequest(cid, [
                    "get;test2",
                ]).expect('x008x', cb)
            },
        ], done)
    })

    it('throw error after "promoting" already long-running conversation', function(done) {
        makeRequest(null, [
            "begin",
            "begin",
        ]).expect(function(res) {
            if (res.status !== 500) throw new Error("there should be internal server error")
        }).end(done)
    })

    it("promote temporary conversation to long-running with 'begin({join: true})'", function(done) {
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "put;test;x006x",
                    "begin;join=true",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "get;test",
                ]).expect('x006x', cb)
            },
        ], done)
    })

    it("do nothing with 'begin({join: true}) when conversation is already long-running'", function(done) {
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "put;test;x007x",
                    "begin",
                    "begin;join=true",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "get;test",
                ]).expect('x007x', cb)
            },
        ], done)
    })

    it('throw error when creating nested conversation in temporary one', function(done) {
        makeRequest(null, [
            "begin;nested=true",
        ]).expect(function(res) {
            if (res.status !== 500) throw new Error("there should be internal server error")
        }).end(done)
    })

    it('proceed through conversation tree until data found', function(done) {
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "put;test;x009x",
                    "begin",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "begin;nested=true",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "get;test",
                ]).expect('x009x', cb)
            },
        ], done)
    })

    it("data in nested conversation doesn't override outter data, but shadow it", function(done) {
        var firstCid = undefined
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "begin",
                    "put;test;x010x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                firstCid = prevRes.text
                makeRequest(firstCid, [
                    "begin;nested=true",
                    "put;test;x011x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "get;test",
                ]).expect('x011x', cb)
            },
            function(prevRes, cb) {
                makeRequest(firstCid, [
                    "get;test",
                ]).expect('x010x', cb)
            },
        ], done)
    })

    it('throw error if calling end() when there is no long-running conversation', function(done) {
        makeRequest(null, [
            "end",
        ]).expect(function(res) {
            if (res.status !== 500) throw new Error("there should be internal server error")
        }).end(done)
    })

    it('pop conversation on end() and resume outer one', function(done) {
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "begin",
                    "put;test;x012x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "begin;nested=true",
                    "put;test;x013x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                var cid = prevRes.text
                makeRequest(cid, [
                    "end",
                    "get;test;x013x",
                ]).expect('x012x', cb)
            },
        ], done)
    })

    it('destroy all descendant conversations with end()', function(done) {
        var cids = []
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "begin",
                    "put;test;x014x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cids.push(prevRes.text)
                makeRequest(cids[0], [
                    "begin;nested=true",
                    "put;test;x015x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cids.push(prevRes.text)
                makeRequest(cids[1], [
                    "begin;nested=true",
                    "put;test;x016x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cids.push(prevRes.text)
                makeRequest(cids[1], [
                    "end",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                makeRequest(cids[0], [
                    "get;test",
                ]).expect('x014x', cb)
            },
            function(prevRes, cb) {
                makeRequest(cids[1], [
                    "get;test",
                ]).expect(500, cb)
            },
            function(prevRes, cb) {
                makeRequest(cids[2], [
                    "get;test",
                ]).expect(500, cb)
            },
        ], done)
    })

    it('destroy whole tree on end({root: true})', function(done) {
        var agent = request.agent(app)
        var cids = []
        async.waterfall([
            function(cb) {
                makeRequest(null, [
                    "begin",
                    "put;test;x017x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cids.push(prevRes.text)
                makeRequest(cids[0], [
                    "begin;nested=true",
                    "put;test;x018x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cids.push(prevRes.text)
                makeRequest(cids[1], [
                    "begin;nested=true",
                    "put;test;x019x",
                    "cidValue",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                cids.push(prevRes.text)
                makeRequest(cids[1], [
                    "end;root=true",
                ]).expect(200, cb)
            },
            function(prevRes, cb) {
                makeRequest(cids[0], [
                    "get;test",
                ]).expect(500, cb)
            },
            function(prevRes, cb) {
                makeRequest(cids[1], [
                    "get;test",
                ]).expect(500, cb)
            },
            function(prevRes, cb) {
                makeRequest(cids[2], [
                    "get;test",
                ]).expect(500, cb)
            },
        ], done)
    })
})
