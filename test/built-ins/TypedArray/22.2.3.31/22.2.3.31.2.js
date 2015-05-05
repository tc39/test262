// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype[Symbol.iterator] is the same function
    object as %TypedArray%.prototype.values
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrays = CreateTypedArrayTypes();
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].prototype.values !== typedArrays[i].prototype[Symbol.iterator]) {
        $ERROR("values method of typed array should be the same function object as that of Array for " + typedArrays[i]);
    }
}
