// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Set Constructor call() throws TypeError if thisArg gives false on
    calling [[GetExtensible]]
includes: [runTestCase.js]
---*/

function testcase() {

    try {
        Set.call(Object.preventExtensions({}))
    } catch (e) {
        if(!(e instanceof TypeError)) return false;
    }

    return true;
};
runTestCase(testcase);
