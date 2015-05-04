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
        if (isNaN(expectedArray[i])) {
            if (!isNaN(args[i])) {
                $ERROR("The rest argument at " + i + " is expected to be NaN but got " + args[i] + " instead");
            }
        } else if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
}
expectedArray = [3, 4, NaN, 6, 7, 8, 9, "a", 11, Math.PI, 13, {value : 14}, 15, [1, 6], 17, 18, {value : 19}, 20];
foo(1, "Hello", 3, 4, NaN, 6, 7, 8, 9, "a", 11, Math.PI, 13, {value : 14}, 15, [1, 6], 17, 18, {value : 19}, 20);
