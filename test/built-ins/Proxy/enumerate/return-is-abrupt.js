// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.11
description: >
    Trap returns abrupt.
info: >
    [[Enumerate]] ()

    8. Let trapResult be Call(trap, handler, «target»).
    9. ReturnIfAbrupt(trapResult).
---*/

var x;
var p = new Proxy({}, {
    enumerate: function(t) {
        throw new Test262Error();
    }
});

assert.throws(Test262Error, function() {
    for (x in p) {}
});
