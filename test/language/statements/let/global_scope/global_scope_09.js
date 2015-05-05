// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It's an early error to use the let statement before it's
    declaration
flags: [negative]
---*/

{
    x++;
}
let x = 1;
