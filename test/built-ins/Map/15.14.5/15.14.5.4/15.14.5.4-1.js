// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.forEach verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //forEach is an instance of Function
    if (!(Map.prototype.forEach instanceof Function)) return false;

    //Map.prototype.forEach.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Map.prototype.forEach) !== Object.getPrototypeOf(Function)) return false;

    //Map.prototype.delete.length is 1
    if (Map.prototype.forEach.length !== 1) return false;

    //new Map.prototype.forEach() throws TypeError
    try {
        new Map.prototype.forEach(function () { })
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Map.prototype.forEach.prototype is undefined
    if (Map.prototype.forEach.prototype === undefined) return true;

    //Map.prototype.forEach() will throw TypeError as Map.prototype does not have [[MapData]]
    try {
        Map.prototype.forEach(function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Map.prototype.delete Verification of function behavior
    try {
        Map.prototype.forEach.call(this, function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
