// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Use array methods on rest argument
---*/

function foo(a = 10, ...elements) {
    if (a !== 20) {
        $ERROR("First argument is expected to be 20");
    }
    if (elements.__proto__ !== Array.prototype) {
        $ERROR("The rest arguemnt is expected to be an Array instance");
    }
    var slicedArgs = elements.slice();
    if (slicedArgs.length !== 3) {
        $ERROR("Sliced array is expected to be of length 3");
    }
    if (slicedArgs[0] !== 30) {
        $ERROR("The first element is expected to be 30");
    }
    if (slicedArgs[1] !== 40) {
        $ERROR("The second element is expected to be 40");
    }
    if (slicedArgs[2] !== 50) {
        $ERROR("The third element is expected to be 50");
    }
}

foo(20, 30, 40, 50);
