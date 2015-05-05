// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.delete use dynamic keys
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();

    var a = {};
    var b = new Date();
    var c = new Error();

    map.set(a);
    map.set(b);
    map.set(c);

    return map.delete(eval("a")) && map.delete(eval("b")) && map.delete(eval("c"));
};
runTestCase(testcase);
