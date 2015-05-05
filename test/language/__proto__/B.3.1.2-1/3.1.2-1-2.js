// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on built-in Objects prototype object"
includes: [runTestCase.js]
---*/

function testcase() {
    return String.prototype.__proto__ === Object.prototype &&
        Number.prototype.__proto__ === Object.prototype &&
        Boolean.prototype.__proto__ === Object.prototype &&
        Function.prototype.__proto__ === Object.prototype &&
        Error.prototype.__proto__ === Object.prototype &&
        Array.prototype.__proto__ === Object.prototype &&
        Date.prototype.__proto__ === Object.prototype &&
        RegExp.prototype.__proto__ === Object.prototype;
}
runTestCase(testcase);
