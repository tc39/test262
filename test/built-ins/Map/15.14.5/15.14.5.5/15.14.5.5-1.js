// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.get verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //forEach is an instance of Function
    if (!(Map.prototype.get instanceof Function)) return false;

    //Map.prototype.get.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Map.prototype.get) !== Object.getPrototypeOf(Function)) return false;

    //Map.prototype.get.length is 1
    if (Map.prototype.get.length !== 1) return false;

    //new Map.prototype.get() throws TypeError
    try {
        new Map.prototype.get(function () { })
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Map.prototype.get.prototype is undefined
    if (Map.prototype.get.prototype === undefined) return true;

    //Map.prototype.get() will throw TypeError as Map.prototype does not have [[MapData]]
    try {
        Map.prototype.get(function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Map.prototype.get Verification of function behavior
    try {
        Map.prototype.get.call(this, function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
