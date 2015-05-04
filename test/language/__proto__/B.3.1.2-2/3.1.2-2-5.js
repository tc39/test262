// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ on built-in function constructor objects"
includes: [runTestCase.js]
---*/

function testcase() {

    var proto = { y:2 };

    String.prototype.__proto__ = proto;
    Number.prototype.__proto__ = proto;
    Function.prototype.__proto__ = proto;
    Error.prototype.__proto__ = proto;
    Array.prototype.__proto__ = proto;
    Boolean.prototype.__proto__ = proto;
    Date.prototype.__proto__ = proto;
    RegExp.prototype.__proto__ = proto;

    return new String('').y === 2 &&
        new Number(1).y === 2 &&
        new Function().y === 2 &&
        new Error().y === 2 &&
        new Array().y === 2 &&
        new Boolean().y === 2 &&
        new Date().y === 2 &&
        new RegExp().y === 2;
}
runTestCase(testcase);
