// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ using eval"
includes: [runTestCase.js]
---*/

function testcase() {

    var obj = {};

    return eval('Object.prototype.__proto__') === null &&
           eval('obj.__proto__') === Object.prototype
}
runTestCase(testcase);
