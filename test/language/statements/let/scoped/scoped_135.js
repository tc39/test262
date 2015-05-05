// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It should be an error to assign a let/const to a variable before
    it's initialized
flags: [negative]
---*/

try {
    function testcase() {
        var x = z;
        let z = 1;
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
