// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map Constructor call() throws TypeError if thisArg gives false on
    calling [[GetExtensible]]
includes: [runTestCase.js]
---*/

function testcase() {

    try {
        Map.call(Object.preventExtensions({}))
    } catch (e) {
        if(e instanceof TypeError) return true;
    }

    return false;
};
runTestCase(testcase);
