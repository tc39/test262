// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.delete verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //delete is an instance of Function
    if (!(Set.prototype.delete instanceof Function)) return false;

    //Set.prototype.delete.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Set.prototype.delete) !== Object.getPrototypeOf(Function)) return false;

    //Set.prototype.delete.length is 1
    if (Set.prototype.delete.length !== 1) return false;

    //new Set.prototype.delete() throws TypeError
    try {
        new Set.prototype.delete()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Set.prototype.delete.prototype is undefined
    if (Set.prototype.delete.prototype === undefined) return true;

    //Set.prototype.delete() will throw TypeError as Set.prototype does not have [[SetData]]
    try {
        Set.prototype.delete();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Set.prototype.delete Verification of function behavior
    try {
        Set.prototype.delete.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
