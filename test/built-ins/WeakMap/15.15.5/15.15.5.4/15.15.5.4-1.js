// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.get verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //forEach is an instance of Function
    if (!(WeakMap.prototype.get instanceof Function)) return false;

    //WeakMap.prototype.get.__proto__ is an Empty Function
    if (Object.getPrototypeOf(WeakMap.prototype.get) !== Object.getPrototypeOf(Function)) return false;

    //WeakMap.prototype.get.length is 1
    if (WeakMap.prototype.get.length !== 1) return false;

    //new WeakMap.prototype.get() throws TypeError
    try {
        new WeakMap.prototype.get(function () { })
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //WeakMap.prototype.get.prototype is undefined
    if (WeakMap.prototype.get.prototype === undefined) return true;

    //WeakMap.prototype.get() will throw TypeError as WeakMap.prototype does not have [[WeakMapData]]
    try {
        WeakMap.prototype.get(function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //WeakMap.prototype.get Verification of function behavior
    try {
        WeakMap.prototype.get.call(this, function () { });
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
