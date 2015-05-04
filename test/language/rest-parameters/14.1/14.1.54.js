// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function multiple args and rest
---*/

var expectedArray = [3, 4, 5];
function foo(a, b, ...args) {
    if (a !== 1) {
        $ERROR("The first argument is expected to be 1");
    }
    if (b !== 2) {
        $ERROR("The second argument is expected to be 1");
    }
    if (args.length !== 0) {
        $ERROR("Rest argument is expected to be of length 0");
    }
}

foo(1, 2);
