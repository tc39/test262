// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Logical operators
---*/

var result = 0b000 || 0B111;
if (result !== 7) {
    $ERROR("Result of Logical or is expected to be 7, but got " + result);
}

result = 0B111 && 0o0;
if (result !== 0) {
    $ERROR("Result of Logical or is expected to be 0, but got " + result);
}
