// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a variable declaration inside an eval in a block will hoist
    and throw error if there is a let statement  in the outer-scope
    with the same identifier
flags: [negative]
---*/

function testcase() {
    let x = 1;
    {
        eval("var x = 2;");
    }
};
testcase();
