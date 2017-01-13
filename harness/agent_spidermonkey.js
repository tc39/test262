// Copyright (C) 2015 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
//
// An implementation of '$.agent' for the SpiderMonkey shell.
// See ../INTERPRETING.md for the API definition.

if (typeof $ == 'undefined')
    $ = {};

$.agent = (function () {

// The SpiderMonkey implementation uses a designated shared buffer _ia
// for coordination, and spinlocks for everything except sleeping.

var _MSG_LOC = 0;               // Low bit set: broadcast available; High bits: seq #
var _ID_LOC = 1;                // ID sent with broadcast
var _ACK_LOC = 2;               // Worker increments this to ack that broadcast was received
var _RDY_LOC = 3;               // Worker increments this to ack that worker is up and running
var _LOCKTXT_LOC = 4;           // Writer lock for the text buffer: 0=open, 1=closed
var _NUMTXT_LOC = 5;            // Count of messages in text buffer
var _NEXT_LOC = 6;              // First free location in the buffer
var _SLEEP_LOC = 7;             // Used for sleeping

var _FIRST = 10;                // First location of first message

var _ia = new Int32Array(new SharedArrayBuffer(65536));
_ia[_NEXT_LOC] = _FIRST;

var _worker_prefix = `
if (typeof $ == 'undefined')
    $ = {};

$.agent = (function () {

var _ia;

var agent = {
    _ia: null,

    receiveBroadcast: function(receiver) {
        var k;
        while (((k = Atomics.load(_ia, ${_MSG_LOC})) & 1) == 0)
            ;
        var received_sab = getSharedArrayBuffer();
        var received_id = Atomics.load(_ia, ${_ID_LOC});
        Atomics.add(_ia, ${_ACK_LOC}, 1);
        while (Atomics.load(_ia, ${_MSG_LOC}) == k)
            ;
        receiver(received_sab, received_id);
    },

    report: function(msg) {
        while (Atomics.compareExchange(_ia, ${_LOCKTXT_LOC}, 0, 1) == 1)
            ;
        msg = "" + msg;
        var i = _ia[${_NEXT_LOC}];
        _ia[i++] = msg.length;
        for ( let j=0 ; j < msg.length ; j++ )
            _ia[i++] = msg.charCodeAt(j);
        _ia[${_NEXT_LOC}] = i;
        Atomics.add(_ia, ${_NUMTXT_LOC}, 1);
        Atomics.store(_ia, ${_LOCKTXT_LOC}, 0);
    },

    sleep: function(s) {
        Atomics.wait(_ia, ${_SLEEP_LOC}, 0, s);
    },

    leaving: function() {}
};

_ia = new Int32Array(getSharedArrayBuffer());
Atomics.add(_ia, ${_RDY_LOC}, 1);

return agent;
})();
`;

var agent =
{
    _numWorkers: 0,
    _numReports: 0,
    _reportPtr: _FIRST,

    start: function (script) {
        setSharedArrayBuffer(_ia.buffer);
        var oldrdy = Atomics.load(_ia, _RDY_LOC);
        evalInWorker(_worker_prefix + script);
        while (Atomics.load(_ia, _RDY_LOC) == oldrdy)
            ;
        this._numWorkers++;
    },

    broadcast: function (sab, id) {
        setSharedArrayBuffer(sab);
        Atomics.store(_ia, _ID_LOC, id);
        Atomics.store(_ia, _ACK_LOC, 0);
        Atomics.add(_ia, _MSG_LOC, 1);
        while (Atomics.load(_ia, _ACK_LOC) < this._numWorkers)
            ;
        Atomics.add(_ia, _MSG_LOC, 1);
    },

    getReport: function () {
        if (this._numReports == Atomics.load(_ia, _NUMTXT_LOC))
            return null;
        var s = "";
        var i = this._reportPtr;
        var len = _ia[i++];
        for ( let j=0 ; j < len ; j++ )
            s += String.fromCharCode(_ia[i++]);
        this._reportPtr = i;
        this._numReports++;
        return s;
    },

    sleep: function(s) {
        Atomics.wait(_ia, _SLEEP_LOC, 0, s);
    },
}

return agent;
})();
