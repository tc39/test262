// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Descriptor of Set
includes: [runTestCase.js]
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(this, 'Set');
    return desc.configurable === true && desc.enumerable === false && desc.writable === true;
};
runTestCase(testcase);
