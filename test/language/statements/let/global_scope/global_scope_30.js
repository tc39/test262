// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const statements inside a block should shadow any var statements
    from the outer scope
---*/

var result1, result2;

var x = 2;
{
    const x = 1;
    result1 = x;
}
result2 = x;

if (result1 !== 1 || result2 !== 2)
    $ERROR("Testcase returned an unexpected value");
