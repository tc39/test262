// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a const declaration and an eval statement that assigns
    before initialization is an error
flags: [negative]
---*/

function testcase() {
    eval("x++;");
    const x = 0;
}
testcase();
