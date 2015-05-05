// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function and the rest parameter has the same name
---*/

function foo(a = 10, ...foo) {
    if (foo.length !== 3) {
        $ERROR("foo is expected to have length 3");
    }
}

foo(10, 20, 30, 40);
