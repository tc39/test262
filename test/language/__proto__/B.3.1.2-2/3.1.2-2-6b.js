// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ after user object is created"
includes: [runTestCase.js]
---*/

function testcase() {

    var proto = { y: 2 };

    var obj = { x: 10 };
    obj.__proto__ = proto;

    proto.y = 20;
    proto.z = 40;


    return obj.x === 10 && obj.y === 20 && obj.z === 40

}
runTestCase(testcase);
