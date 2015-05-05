// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[DefineOwnProperty]] __proto__ Builtin objects"
includes: [runTestCase.js]
---*/

function testcase() {
    var proto = {y:2}

    var proto = { y: 2 }

    Object.defineProperty(String, '__proto__', proto);
    Object.defineProperty(Number, '__proto__', proto);
    Object.defineProperty(Boolean, '__proto__', proto);
    Object.defineProperty(Function, '__proto__', proto);
    Object.defineProperty(Array, '__proto__', proto);
    Object.defineProperty(Error, '__proto__', proto);
    Object.defineProperty(RegExp, '__proto__', proto);
    Object.defineProperty(Math, '__proto__', proto);
    Object.defineProperty(JSON, '__proto__', proto);


    return String.y === undefined &&
            Number.y === undefined &&
            Function.y === undefined &&
            Function.y === undefined &&
            Array.y === undefined &&
            Error.y === undefined &&
            RegExp.y === undefined &&
            Math.y === undefined &&
            JSON.y === undefined;

}
runTestCase(testcase);
