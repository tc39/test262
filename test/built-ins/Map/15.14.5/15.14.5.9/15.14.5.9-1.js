// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.set verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //set is an instance of Function
    if (!(Map.prototype.set instanceof Function)) return false;

    //Map.prototype.set.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Map.prototype.set) !== Object.getPrototypeOf(Function)) return false;

    //Map.prototype.set.length is 1
    if (Map.prototype.set.length !== 2) return false;

    //new Map.prototype.set() throws TypeError
    try {
        new Map.prototype.set()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Map.prototype.set.prototype is undefined
    if (Map.prototype.set.prototype === undefined) return true;

    //Map.prototype.set() will throw TypeError as Map.prototype does not have [[MapData]]
    try {
        Map.prototype.set();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Map.prototype.set Verification of function behavior
    try {
        Map.prototype.set.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
