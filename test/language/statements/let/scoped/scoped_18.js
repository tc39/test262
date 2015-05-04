// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redeclaration is not allowed for var and let statements
flags: [negative]
---*/

function testcase() {
    var x = 1;
    let x = 1;
}
testcase();
