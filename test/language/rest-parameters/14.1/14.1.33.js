// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Lambda with arguments as the rest argument
---*/

var foo = (a = 10, ...b) => { return b.length; };
if (foo(2, 3, 4) !== 2) {
    $ERROR("Method is expected to return 2");
}
if (foo() !== 0) {
    $ERROR("Method is expected to return 0");
}
