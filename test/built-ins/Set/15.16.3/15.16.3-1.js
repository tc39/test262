// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new Set()
includes: [runTestCase.js]
---*/

function testcase() {
    var set = new Set();
    return  Object.getPrototypeOf(set) === Set.prototype &&
            set instanceof Set &&
            set.add instanceof Function &&
            set.clear instanceof Function &&
            set.delete instanceof Function &&
            set.forEach instanceof Function &&
            set.has instanceof Function &&
            set.size !== undefined;
};
runTestCase(testcase);
