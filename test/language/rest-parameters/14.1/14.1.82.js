// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator method and rest 1
---*/

var expectedArray = [1, 2, 3];
function *foo(...args) {
    if (args.length !== expectedArray.length) {
        $ERROR("The rest argument is expected to have length " + expectedArray.length);
    }
    for (i = 0; i < expectedArray.length; i++) {
        if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
    yield 1;
    yield 2;
}

var iter = foo(1, 2, 3);
if (iter.next().value !== 1) {
    $ERROR("Generator is expected to return 1 first");
}

expectedArray = [1, 2, 3, 4, 5];
if (iter.next().value !== 2) {
    $ERROR("Generator is expected to return 2 first");
}
