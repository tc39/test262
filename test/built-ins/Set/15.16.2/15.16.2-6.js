// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set Constructor call() throws TypeError if thisArg has [[SetData]]
includes: [runTestCase.js]
---*/

function testcase() {

    function MySet() {
        Set.call(this);
    };

    MySet.prototype = Set.prototype;
    MySet.prototype.constructor = new Set();

    try {
        new MySet();
    } catch (e) {
        if(e instanceof TypeError)
            return true;
    }

    return false;
};
runTestCase(testcase);
