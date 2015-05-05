// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    let statements must be inside a block when used in for-in
    statements
flags: [negative]
---*/

function testcase() {
    var data = {name: "john", surname:"doe"};
    for (var x in data) let i = 1;
};
testcase();
