// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map.prototype.clear check if map all properties after clear
includes: [runTestCase.js]
---*/

function testcase() {
    var map = new Map();
    map.clear();
    map.set();

    if (map.size !== 1) return false;
    var called = 0;
    map.forEach(function (val) {
        called++;
    });
    if (called !== 1) return false;
    if( !map.delete() || map.size!=0) return false;
    map.clear();

    return map.size == 0 ;

};
runTestCase(testcase);
