// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Prototype of Set if Function
includes: [runTestCase.js]
---*/

function testcase() {
    return Set.__proto__ === Function.__proto__;
};
runTestCase(testcase);
