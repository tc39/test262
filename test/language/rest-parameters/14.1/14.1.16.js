// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arguments as the rest parameter name
---*/

function foo(a, b = 10, ...arguments) {
    if (arguments.length !== 3) {
        $ERROR("Rest parameter is expected to be of length 3");
    }
    if (!(arguments instanceof Array)) {
        $ERROR("Rest parameter is expected to be an array");
    }
    if (arguments[0] !== 3) {
        $ERROR("First rest parameter is expected to be 3");
    }
    if (arguments[1] !== 4) {
        $ERROR("Second rest parameter is expected to be 4");
    }
    if (arguments[2] !== 5) {
        $ERROR("Third rest parameter is expected to be 5");
    }
}

foo(1, 2, 3, 4, 5)
