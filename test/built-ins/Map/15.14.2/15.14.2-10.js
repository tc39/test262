// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map Constructor called as function. thisArg is null
includes: [runTestCase.js]
---*/

function testcase() {

    try{
        var map = Map.call(null);
    } catch (e) {
        if (!(e instanceof TypeError))
            return false;
    }
    return true;

};
runTestCase(testcase);
