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


    return new String().y === undefined &&
            new Number().y === undefined &&
            new Function().y === undefined &&
            new Function().y === undefined &&
            new Array().y === undefined &&
            new Error().y === undefined &&
            new RegExp().y === undefined;

}
runTestCase(testcase);
