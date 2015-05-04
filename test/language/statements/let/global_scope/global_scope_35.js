// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const assignments are not just static values but can be expressions
---*/

const x = 1 + 2;
if (x !== 3)
    $ERROR("Testcase returned an unexpected value");
