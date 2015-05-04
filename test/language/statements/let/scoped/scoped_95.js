// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const statements will shadow object properties when used in with
    statement
---*/

try {
    function testcase() {
        var result;

        with({a:2}) {
            const a = 3;
            result = a;
        }
        if (result !== 3)
            $ERROR("Testcase returned an unexpected value");
    }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
