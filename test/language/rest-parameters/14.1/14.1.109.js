// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Nested scenario
---*/

var expectedArray = [2, 3, 4];
function foo(a, ...args) {
    function bar(...args) {
        for (i = 0; i < 3; i++) {
            if (args[i] !== expectedArray[i]) {
                $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
            }
        }
    }
    bar(...args);
}
foo(1, 2, 3, 4);
