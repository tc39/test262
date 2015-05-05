// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: WeakMap.prototype.has verification of function
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new WeakMap();
    var values = [new Date(), new Error(), new Function(), new Number(), new Boolean(), new String(), []];

    for (var i = 0; i < values.length; i++) {
        map.set(values[i]);
    }

    for (i = 0; i < values.length; i++) {
        if(!map.has(values[i])) return false;
    }

    return true;
};
runTestCase(testcase);
