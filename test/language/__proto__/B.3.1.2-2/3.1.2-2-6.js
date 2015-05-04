// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ after builtin object is created"
includes: [runTestCase.js]
---*/

function testcase() {

    var proto = { y: 2 };
    var pass = true;

    var testVector = [
        new String(),
        new Number(1),
        new Function(),
        new Error(),
        new Array(),
        new Boolean(),
        new Date(),
        new RegExp(),
        [1, 2, 3],
        /regexp/
    ]

    String.prototype.__proto__ = proto;
    Number.prototype.__proto__ = proto;
    Function.prototype.__proto__ = proto;
    Error.prototype.__proto__ = proto;
    Array.prototype.__proto__ = proto;
    Boolean.prototype.__proto__ = proto;
    Date.prototype.__proto__ = proto;
    RegExp.prototype.__proto__ = proto;

    testVector.forEach(function (testInput) {
        if (testInput.y !== 2) {
            pass = false;
        }
    });

    return pass;
}
runTestCase(testcase);
