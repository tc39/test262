// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function returning the rest arg
---*/

var expectedArray = [1, 2, 3];
function foo(...args) {
    return args;
}

var restParam = foo(1, 2, 3);
if (restParam.length !== 3) {
    $ERROR("The rest argument is expected to have length 3");
}
for (i = 0; i < 3; i++) {
    if (restParam[i] !== expectedArray[i]) {
        $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + restParam[i] + " instead");
    }
}
