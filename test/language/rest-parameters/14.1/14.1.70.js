// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Method Definition with rest
---*/

var expectedArray = [1, 2, 3];
var foo = {
    bar(...args) {
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

foo.bar(1, 2, 3);
