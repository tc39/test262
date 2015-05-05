// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map Constructor call() throws TypeError if thisArg has [[MapData]]
includes: [runTestCase.js]
---*/

function testcase() {

    function MyMap() {
        Map.call(this);
    };

    MyMap.prototype = Map.prototype;
    MyMap.prototype.constructor = new Map();

    try {
        new MyMap();
    } catch (e) {
        if(e instanceof TypeError)
            return true;
    }

    return false;
};
runTestCase(testcase);
