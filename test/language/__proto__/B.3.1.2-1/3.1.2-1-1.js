// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: __proto__ for literals
includes: [runTestCase.js]
---*/

//INTERNAL

function testcase() {

    return Infinity.__proto__ === Number.prototype &&
           ''.__proto__ === String.prototype &&
           NaN.__proto__ === Number.prototype &&
           [].__proto__ === Array.prototype &&
           {}.__proto__ === Object.prototype &&
           /regexp/.__proto__ === RegExp.prototype
};
runTestCase(testcase);
