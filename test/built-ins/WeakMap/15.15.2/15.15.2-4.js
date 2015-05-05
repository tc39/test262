// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap Constructor call() throws TypeError if thisArg has
    [[WeakMapData]]
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var map = WeakMap.call(new WeakMap());
    } catch (e) {
        if (!(e instanceof TypeError)) {
            return false;
        }
    }

    return true;

};
runTestCase(testcase);
