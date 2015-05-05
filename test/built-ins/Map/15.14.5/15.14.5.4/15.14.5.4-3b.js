// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map.prototype.forEach verify thisArg is equal to undefined in
    strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
    "use strict";
    var that = this;

    var myException = {};
    var map = new Map();
    map.set(1);
    try{
       map.forEach(function () { if (this === undefined) throw myException});
    } catch (e) {
        if (e === myException) {
            return true;
        }
    }
    return false;
};
runTestCase(testcase);
