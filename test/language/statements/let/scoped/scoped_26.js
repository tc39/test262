// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It should be a redeclaration error to have a var statement which
    hoists from a block  to a scope where there is a const statement
    with the same identifier
flags: [negative]
---*/

function testcase() {
    const x = 1;
    {
        var x = 1;
    }
}
testcase();
