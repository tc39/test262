// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map Constructor call() throws TypeError if thisArg has [[MapData]]
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var map = Map.call(new Map());
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    return true;

};
runTestCase(testcase);
