// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.forEach verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //forEach is an instance of Function
    if (!(Set.prototype.forEach instanceof Function)) return false;

    //Set.prototype.forEach.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Set.prototype.forEach) !== Object.getPrototypeOf(Function)) return false;

    //Set.prototype.delete.length is 1
    if (Set.prototype.forEach.length !== 1) return false;

    //new Set.prototype.forEach() throws TypeError
    try {
        new Set.prototype.forEach(function () { })
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Set.prototype.forEach.prototype is undefined
    if (Set.prototype.forEach.prototype === undefined) return true;

    //Set.prototype.forEach() will throw TypeError as Set.prototype does not have [[SetData]]
    try {
        Set.prototype.forEach(function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Set.prototype.delete Verification of function behavior
    try {
        Set.prototype.forEach.call(this, function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
