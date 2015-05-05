// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: get Set.prototype.size Size of set containing ECMAScript values
includes: [runTestCase.js]
---*/

function testcase() {

    var set = new Set();

    set.add(1);
    set.add();

    return set.size === 2;


};
runTestCase(testcase);
