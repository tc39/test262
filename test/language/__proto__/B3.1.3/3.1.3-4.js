// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: __proto__ in Object Initializer as key string
includes: [runTestCase.js]
---*/

function testcase() {

    var obj = { x: 1 };
    obj['__proto__'] = { y: 2 };

    return obj.y === 2;

}
runTestCase(testcase);
