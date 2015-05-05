// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.delete verification of function
includes: [runTestCase.js]
---*/

function testcase() {

    //delete is an instance of Function
    if (!(Map.prototype.delete instanceof Function)) return false;

    //Map.prototype.delete.__proto__ is an Empty Function
    if (Object.getPrototypeOf(Map.prototype.delete) !== Object.getPrototypeOf(Function)) return false;

    //Map.prototype.delete.length is 1
    if (Map.prototype.delete.length !== 1) return false;

    //new Map.prototype.delete() throws TypeError
    try {
        new Map.prototype.delete({})
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    //Map.prototype.delete.prototype is undefined
    if (Map.prototype.delete.prototype === undefined) return true;

    //Map.prototype.delete() will throw TypeError as Map.prototype does not have [[MapData]]
    try {
        Map.prototype.delete({});
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    //Map.prototype.delete Verification of function behavior
    try {
        Map.prototype.delete.call(this, {});
    } catch (e) {
        if (!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
