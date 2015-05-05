// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Combination of rest and default
---*/

function foo(a, b, ...args) {
    if (a !== 1) {
        $ERROR("First argument is expected to be 1");
    }
    if (b !== undefined) {
        $ERROR("First argument is expected to be undefined");
    }
    if (args.length !== 0) {
        $ERROR("Rest argument is expected to be of length 0");
    }
}

foo(1);
