// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new Map()
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    return  Object.getPrototypeOf(map) === Map.prototype &&
            map instanceof Map &&
            map.clear instanceof Function &&
            map.delete instanceof Function &&
            map.get instanceof Function &&
            map.set instanceof Function &&
            map.forEach instanceof Function &&
            map.has instanceof Function &&
            map.size !== undefined;
};
runTestCase(testcase);
