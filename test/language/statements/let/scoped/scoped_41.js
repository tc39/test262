// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const declarations inside functions will shadow var declarations
    from the outer-scope
---*/

try {
    function testcase() {
        var result1, result2;

        var x = 3;
        function foo() {
            const x = 4;
            result1 = x;
        }
        foo();
        result2 = x;

        if (result1 !== 4 || result2 !== 3)
            $ERROR("Testcase returned an unexpected value");
   }
    testcase();
} catch(e) {
    $ERROR(e.message);
}
