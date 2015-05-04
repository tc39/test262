// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on built-in objects"
includes: [runTestCase.js]
---*/

function testcase() {
    return Object.__proto__ === Function.prototype &&
        String.__proto__ === Function.prototype &&
        Number.__proto__ === Function.prototype &&
        Boolean.__proto__ === Function.prototype &&
        Function.__proto__ === Function.prototype &&
        Error.__proto__ === Function.prototype &&
        Array.__proto__ === Function.prototype &&
        Date.__proto__ === Function.prototype &&
        RegExp.__proto__ === Function.prototype &&
        Math.__proto__ === Object.prototype &&
        JSON.__proto__ === Object.prototype
}
runTestCase(testcase);
