// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ in eval"
includes: [runTestCase.js]
---*/

function testcase() {
    var obj = { x: 10 };
    eval('obj.__proto__ = { y: 2 }');
    return obj.y === 2;
}
runTestCase(testcase);
