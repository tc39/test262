// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Method Definition with rest
---*/

var expectedArray = [2, 3, 4];
var foo = {
    bar(a, ...args) {
        if (a !== 1) {
            $ERROR("First argument should be 1, but got " + a);
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
}

foo.bar(1, 2, 3, 4);
