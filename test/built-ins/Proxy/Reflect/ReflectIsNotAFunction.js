// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
includes:
    - runTestCase.js
    - proxyLib.js
---*/

// Reflect cannot be used as a constructor or a function
function testcase() {

    try {

        new Reflect();
        $ERROR("TypeError should be thrown");

    }
    catch (e) {
        if (!e instanceof TypeError) {
            $ERROR("Expected type Error");
        }
    }

    try {
        Reflect();
        $ERROR("TypeError should be thrown");
    }
    catch (e) {
        if (!e instanceof TypeError) {
            $ERROR("Expected type Error");
        }
    }

    return true;
};
runTestCase(testcase);
