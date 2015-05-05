// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Lambda method with rest 1
---*/

var expectedArray = [1, 2, 3];
var foo = (...args) => {
    if (args.length !== expectedArray.length) {
        $ERROR("The rest argument is expected to have length " + expectedArray.length);
    }
    for (i = 0; i < expectedArray.length; i++) {
        if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
};
foo(1, 2, 3);
