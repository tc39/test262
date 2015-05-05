// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing symbol names same as property names
includes: [runTestCase.js]
---*/

function verifySymbol(obj, sym) {
    if (obj[sym] === undefined || typeof sym !== 'symbol') {
        return false;
    }
    return true;
}

function testcase() {
    var obj = new Object();
    var __proto__ = Symbol(1);
    obj[__proto__] = 'test';

    if (!verifySymbol(obj, __proto__)) {
        $ERROR("1. error accessing the symbol key");
    }

    var prototype = Symbol('obj symbol');

    obj[prototype] = 'Another symbol on object';
    if (!verifySymbol(obj, prototype)) {
        $ERROR("2. error accessing the symbol key");
    }

    var arr = new Array(10);
    var length = Symbol('array symbol');

    arr[length] = 11;

    if (!verifySymbol(arr, length) || arr.length !== 10) {
        $ERROR("3. Length is used as the symbol key");
    }

    return true;

}
runTestCase(testcase);
