// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Using arguments as an identifier in const statements is not a
    redeclaration error
---*/

try {
    function testcase() {
        const arguments = 1;
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
