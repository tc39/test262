// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Duplicate parameter names are allowed in non-strict mode if the
    method has simple formal parameters
---*/

function foo(a, b, a) {
    if (a !== 30) {
        $ERROR("Parameter a is expected to have the value 30");
    }
    if (b !== 20) {
        $ERROR("Parameter b is expected to have the value 20");
    }
}

foo(10, 20, 30);
