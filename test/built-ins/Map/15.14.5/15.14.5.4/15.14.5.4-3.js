// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach verify thisArg is undefined if not specified
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
    var that = this;
    var myException = {};
    var map = new Map();
    map.set(1);
    try{
        Map.prototype.forEach.call(map, function () { if (this === that) throw myException});
    } catch (e) {
        if (e === myException) {
            return true;
        }
    }
    return false
};
runTestCase(testcase);
