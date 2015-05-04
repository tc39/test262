// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check function length
---*/

function foo(a, ...args) {
    return a;
}

if (foo.length !== 1) {
    $ERROR("Method is expected to have a length of 1");
}
