// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ on built-in function constructor objects"
includes: [runTestCase.js]
---*/

function testcase() {

    var proto = { y:2 };

    Object.__proto__ = proto;
    String.__proto__ = proto;
    Number.__proto__ = proto;
    Function.__proto__ = proto;
    Error.__proto__ = proto;
    Array.__proto__ = proto;
    Boolean.__proto__ = proto;
    Date.__proto__ = proto;
    RegExp.__proto__ = proto;
    Math.__proto__ = proto;
    JSON.__proto__ = proto;

    return Object.y === 2 &&
        String.y === 2 &&
        Number.y === 2 &&
        Function.y === 2 &&
        Error.y === 2 &&
        Array.y === 2 &&
        Boolean.y === 2 &&
        Date.y === 2 &&
        RegExp.y === 2 &&
        Math.y === 2 &&
        JSON.y === 2;
}
runTestCase(testcase);
