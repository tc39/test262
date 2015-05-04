// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set Constructor call() throws TypeError if thisArg has [[SetData]]
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var set = Set.call(new Set());
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    return true;

};
runTestCase(testcase);
