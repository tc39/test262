// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set.prototype.add verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //add is an instance of Function
    if (!(Set.prototype.add instanceof Function)) return false;

    //Set.prototype.add.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Set.prototype.add) !== Object.getPrototypeOf(Function)) return false;

    //Set.prototype.add.length is 1
    if (Set.prototype.add.length !== 1) return false;

    //new Set.prototype.add() throws TypeError
    try {
        new Set.prototype.add()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Set.prototype.add.prototype is undefined
    if (Set.prototype.add.prototype === undefined) return true;

    //Set.prototype.add() will throw TypeError as Set.prototype does not have [[SetData]]
    try {
        Set.prototype.add();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Set.prototype.add Verification of function behavior
    try {
        Set.prototype.add.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
