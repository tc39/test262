// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check function length
---*/

function foo(a, b = 10, ...args) {
    return b;
}

if (foo.length !== 1) {
    $ERROR("Method is expected to have a length of 1, but got " + foo.length);
}
