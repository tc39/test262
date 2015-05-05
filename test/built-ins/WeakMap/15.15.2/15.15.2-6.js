// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap Constructor call() throws TypeError if thisArg has
    [[WeakMapData]]
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {

    function MyWeakMap() {
        WeakMap.call(this);
    };

    MyWeakMap.prototype = WeakMap.prototype;
    MyWeakMap.prototype.constructor = new WeakMap();

    try {
        new MyWeakMap();
    } catch (e) {
        if(e instanceof TypeError)
            return true;
    }

    return false;
};
runTestCase(testcase);
