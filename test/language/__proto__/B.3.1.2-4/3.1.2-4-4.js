// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[DefineOwnProperty]] __proto__ Builtin.prototype"
includes: [runTestCase.js]
---*/

function testcase() {

    var proto = {y:2}

    Object.defineProperty(String.prototype, '__proto__', proto);
    Object.defineProperty(Number.prototype, '__proto__', proto);
    Object.defineProperty(Boolean.prototype, '__proto__', proto);
    Object.defineProperty(Function.prototype, '__proto__', proto);
    Object.defineProperty(Array.prototype, '__proto__', proto);
    Object.defineProperty(Error.prototype, '__proto__', proto);
    Object.defineProperty(RegExp.prototype, '__proto__', proto);


    return String.prototype.y === undefined &&
            Number.prototype.y === undefined &&
            Function.prototype.y === undefined &&
            Function.prototype.y === undefined &&
            Array.prototype.y === undefined &&
            Error.prototype.y === undefined &&
            RegExp.prototype.y === undefined;

}
runTestCase(testcase);
