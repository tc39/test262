// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const declarations should be allowed in blocks
---*/

try {
    function testcase() {
        {
            const x = 1;
        }
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
