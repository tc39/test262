// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Using eval as an identifier in const statements is not an error
---*/

try {
    function testcase() {
        { const eval = 1; }
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
