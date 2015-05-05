// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Length of the from method is 1
---*/

if (Array.from.length != 1) {
    $ERROR("Lenght of Array.from is expected to be 1");
}
