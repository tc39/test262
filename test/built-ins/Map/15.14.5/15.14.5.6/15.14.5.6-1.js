// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.has verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //has is an instance of Function
    if (!(Map.prototype.has instanceof Function)) return false;

    //Map.prototype.has.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Map.prototype.has) !== Object.getPrototypeOf(Function)) return false;

    //Map.prototype.has.length is 1
    if (Map.prototype.has.length !== 1) return false;

    //new Map.prototype.has() throws TypeError
    try {
        new Map.prototype.has()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Map.prototype.has.prototype is undefined
    if (Map.prototype.has.prototype === undefined) return true;

    //Map.prototype.has() will throw TypeError as Map.prototype does not have [[MapData]]
    try {
        Map.prototype.has();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Map.prototype.has Verification of function behavior
    try {
        Map.prototype.has.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
