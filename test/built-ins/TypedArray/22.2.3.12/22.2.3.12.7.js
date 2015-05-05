// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this argument is not an object will cause type error
includes: [TypedArrayHelper.js]
---*/

function callbackFn(value, index, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].forEach.call("String");
        $ERROR("Error: Expected to throw a TypeError but forEach didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
