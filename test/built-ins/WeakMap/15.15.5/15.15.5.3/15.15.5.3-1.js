// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.delete verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //delete is an instance of Function
    if (!(WeakMap.prototype.delete instanceof Function)) return false;

    //WeakMap.prototype.delete.__proto__ is an Empty Function
    if (Object.getPrototypeOf(WeakMap.prototype.delete) !== Object.getPrototypeOf(Function)) return false;

    //WeakMap.prototype.delete.length is 1
    if (WeakMap.prototype.delete.length !== 1) return false;

    //new WeakMap.prototype.delete() throws TypeError
    try {
        new WeakMap.prototype.delete({})
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //WeakMap.prototype.delete.prototype is undefined
    if (WeakMap.prototype.delete.prototype === undefined) return true;

    //WeakMap.prototype.delete() will throw TypeError as WeakMap.prototype does not have [[WeakMapData]]
    try {
        WeakMap.prototype.delete({});
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //WeakMap.prototype.delete Verification of function behavior
    try {
        WeakMap.prototype.delete.call(this, {});
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
