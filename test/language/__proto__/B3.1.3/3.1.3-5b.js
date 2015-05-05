// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: __proto__ in Object Initializer in eval creates updates prototype
includes: [runTestCase.js]
---*/

function testcase() {
    var obj = eval('({x: 1, __proto__ : {y:2}})')
    return obj.y === 2;
}
runTestCase(testcase);
