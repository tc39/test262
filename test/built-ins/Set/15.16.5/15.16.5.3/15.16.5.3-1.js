// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.clear verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //clear is an instance of Function
    if (!(Set.prototype.clear instanceof Function)) return false;

    //Set.prototype.clear.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Set.prototype.clear) !== Object.getPrototypeOf(Function)) return false;

    //Set.prototype.clear.length is 0
    if (Set.prototype.clear.length !== 0) return false;

    //new Set.prototype.clear() throws TypeError
    try {
        new Set.prototype.clear()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Set.prototype.clear.prototype is undefined
    if (Set.prototype.clear.prototype === undefined) return true;

    //Set.prototype.clear() will throw TypeError as Set.prototype does not have [[SetData]]
    try {
        Set.prototype.clear();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Set.prototype.clear Verification of function behavior
    try {
        Set.prototype.clear.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
