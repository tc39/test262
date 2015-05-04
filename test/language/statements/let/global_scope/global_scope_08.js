// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const declarations inside a block will shadow var declarations
    declared in outer scope
---*/

var result1, result2;

{
    const x = 1;
    result1 = x;
}
var x = 2;
result2 = x;

if (result1 !== 1 || result2 !== 2)
    $ERROR("Testcase returned an unexpected value");
