// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having a let declaration inside an eval and assigning before
    initialization is an error
flags: [negative]
---*/

try {
    function testcase() {
        x++;
        eval("let x = 0;")
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
