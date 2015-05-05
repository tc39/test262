// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.clear verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //add is an instance of Function
    if (!(Map.prototype.clear instanceof Function)) return false;

    //Map.prototype.clear.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Map.prototype.clear) !== Object.getPrototypeOf(Function)) return false;

    //Map.prototype.clear.length is 0
    if (Map.prototype.clear.length !== 0) return false;

    //new Map.prototype.clear() throws TypeError
    try {
        new Map.prototype.clear()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Map.prototype.clear.prototype is undefined
    if (Map.prototype.clear.prototype === undefined) return true;

    //Map.prototype.clear() will throw TypeError as Map.prototype does not have [[MapData]]
    try {
        Map.prototype.clear();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Map.prototype.clear Verification of function behavior
    try {
        Map.prototype.clear.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
