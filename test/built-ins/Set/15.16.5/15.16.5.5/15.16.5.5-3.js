// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach verify thisArg is undefined if not specified
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
    var called = false;
    var that = this;
    var mySetException = {};
    var set = new Set();
    set.add(1);
    try{
        Set.prototype.forEach.call(set, function () { called = true; if (this !== that) throw mySetException});
    } catch (e) {
        if (e === mySetException) {
            return false;
        }
    }
    return called && true;
};
runTestCase(testcase);
