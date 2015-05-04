// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Assigning an object to const and changing it's properties should
    work
---*/

const x = {a:2};
x.a = 3;
if (x.a !== 3)
    $ERROR("Testcase returned an unexpected value");
