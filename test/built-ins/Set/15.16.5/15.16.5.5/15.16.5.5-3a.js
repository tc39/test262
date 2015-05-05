// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set.prototype.forEach verify thisArg is equal to global object in
    non-strict mode
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
    var that = this;
    var called = false;
    var mySetException = {};
    var set = new Set();
    set.add(1);
    try{
       set.forEach(function () { called = true; if (this !== that) throw mySetException});
    } catch (e) {
        if (e !== mySetException) {
            return false;
        }
    }
    return called && true;
};
runTestCase(testcase);
