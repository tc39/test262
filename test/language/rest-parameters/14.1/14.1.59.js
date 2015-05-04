// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function invoked with different types of arguments
---*/

var expectedArray = [];
function foo(a, b, ...args) {
    if (a !== 1) {
        $ERROR("The first argument is expected to be 1");
    }
    if (b !== "Hello") {
        $ERROR("The second argument is expected to be 1");
    }
    if (args.length !== expectedArray.length) {
        $ERROR("The rest argument is expected to have length 3");
    }
    for (i = 0; i < 3; i++) {
        if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
}

expectedArray = ['a'];
foo(1, "Hello", 'a');
