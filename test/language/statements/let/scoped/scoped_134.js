// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Having let as an identifier is not an error because it's a future
    reserved keyword
---*/

try {
    function testcase() {
        const let = 1;
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
