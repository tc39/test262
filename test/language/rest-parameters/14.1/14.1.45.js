// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: A parameter is named arguments
---*/

function foo(a, arguments = 20, b) {
    if (arguments !== 20) {
        $ERROR("Second argument is expected to have the value 20");
    }
}

foo(10);
