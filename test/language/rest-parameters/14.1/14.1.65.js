// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check function length
---*/

function foo(a = 10, b, ...args) {
    return b;
}

if (foo.length !== 0) {
    $ERROR("Method is expected to have a length of 0, but got " + foo.length);
}
