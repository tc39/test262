// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a const declaration inside an eval and assigning before
    initialization is an error
flags: [negative]
---*/

function testcase() {
    x++;
    eval("const x = 0;")
}
testcase();
