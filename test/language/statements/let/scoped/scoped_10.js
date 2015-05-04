// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    var statements hoist from the block scope and will cause
    redeclaration error if  there already is a let statement with the
    same identifier on the outer scope
flags: [negative]
---*/

function testcase() {
    {
        var x = 1;
    }
    let x = 1;
}
testcase();
