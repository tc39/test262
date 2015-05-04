// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redeclaration is not allowed for let and var statements
flags: [negative]
---*/

function testcase() {
    let x = 1;
    var x = 1;
}
testcase();
