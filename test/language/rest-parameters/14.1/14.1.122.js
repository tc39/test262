// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function multiple args and rest, invoked with spread
---*/

var expectedArray = [3, 4, 5];
function foo(a, b, ...args) {
    if (a !== 1) {
        $ERROR("The first argument is expected to be 1");
    }
    if (b !== 2) {
        $ERROR("The second argument is expected to be 1");
    }
    if (args.length !== 3) {
        $ERROR("The rest argument is expected to have length 3");
    }
    for (i = 0; i < 3; i++) {
        if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
}

foo(1, 2, ...expectedArray);
