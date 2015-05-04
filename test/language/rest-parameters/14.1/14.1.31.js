// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Lambda with arguments as the rest argument
---*/

function foo(a, ...arguments) {
    return arguments.length;
}
if (foo(2, 3, 4) !== 2) {
    $ERROR("Method is expected to return 2");
}
