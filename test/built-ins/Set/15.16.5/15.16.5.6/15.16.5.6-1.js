// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.has verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //has is an instance of Function
    if (!(Set.prototype.has instanceof Function)) return false;

    //Set.prototype.has.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Set.prototype.has) !== Object.getPrototypeOf(Function)) return false;

    //Set.prototype.has.length is 1
    if (Set.prototype.has.length !== 1) return false;

    //new Set.prototype.has() throws TypeError
    try {
        new Set.prototype.has()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Set.prototype.has.prototype is undefined
    if (Set.prototype.has.prototype === undefined) return true;

    //Set.prototype.has() will throw TypeError as Set.prototype does not have [[SetData]]
    try {
        Set.prototype.has();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Set.prototype.has Verification of function behavior
    try {
        Set.prototype.has.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
