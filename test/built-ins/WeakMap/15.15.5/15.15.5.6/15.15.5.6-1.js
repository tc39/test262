// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.set verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //set is an instance of Function
    if (!(WeakMap.prototype.set instanceof Function)) return false;

    //WeakMap.prototype.set.__proto__ is an Empty Function
    if (Object.getPrototypeOf(WeakMap.prototype.set) !== Object.getPrototypeOf(Function)) return false;

    //WeakMap.prototype.set.length is 1
    if (WeakMap.prototype.set.length !== 2) return false;

    //new WeakMap.prototype.set() throws TypeError
    try {
        new WeakMap.prototype.set()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //WeakMap.prototype.set.prototype is undefined
    if (WeakMap.prototype.set.prototype === undefined) return true;

    //WeakMap.prototype.set() will throw TypeError as WeakMap.prototype does not have [[WeakMapData]]
    try {
        WeakMap.prototype.set();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //WeakMap.prototype.set Verification of function behavior
    try {
        WeakMap.prototype.set.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
