// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.has verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //has is an instance of Function
    if (!(WeakMap.prototype.has instanceof Function)) return false;

    //WeakMap.prototype.has.__proto__ is an Empty Function
    if (Object.getPrototypeOf(WeakMap.prototype.has) !== Object.getPrototypeOf(Function)) return false;

    //WeakMap.prototype.has.length is 1
    if (WeakMap.prototype.has.length !== 1) return false;

    //new WeakMap.prototype.has() throws TypeError
    try {
        new WeakMap.prototype.has()
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //WeakMap.prototype.has.prototype is undefined
    if (WeakMap.prototype.has.prototype === undefined) return true;

    //WeakMap.prototype.has() will throw TypeError as WeakMap.prototype does not have [[WeakMapData]]
    try {
        WeakMap.prototype.has();
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //WeakMap.prototype.has Verification of function behavior
    try {
        WeakMap.prototype.has.call(this);
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
