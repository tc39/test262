// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Function with only one parameter which is rest
---*/

var obj1 = { value: 1 };
var obj2 = { value: 2 };
var obj3 = { value: 3 };
var expectedArray = [obj1, obj2, obj3];
function foo(...args) {
    if (args.length !== 3) {
        $ERROR("The rest argument is expected to have length 3");
    }
    for (i = 0; i < 3; i++) {
        if (args[i] !== expectedArray[i]) {
            $ERROR("The rest argument's " + i + "th element is expected to be " + expectedArray[i] + " but got " + args[i] + " instead");
        }
    }
}

foo(obj1, obj2, obj3);
