// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having const as an identifier is an error because it's a reserved
    keyword
flags: [negative]
---*/

try {
    function testcase() {
        const const = 1;
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
