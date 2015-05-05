// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Accessing a const statement from the outer scope is an error
---*/

try {
    {
        const x = 1;
    }
    x++;
    $ERROR("Testcase returned an unexpected value");
} catch(e) {
    if (e === undefined || e.name !== "ReferenceError")
        $ERROR(e.message)
}
