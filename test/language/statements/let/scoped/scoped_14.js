// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redeclaration is not allowed for let and const statements
flags: [negative]
---*/

function testcase() {
    let x = 1;
    const x = 2;
}
testcase();
