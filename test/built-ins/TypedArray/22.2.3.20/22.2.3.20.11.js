// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this object not a TypedArray will cause a TypeError
includes: [TypedArrayHelper.js]
---*/

function callabackFn(prev, current, index, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + current + " and index " + index);
}

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].reduceRight.call([2, 3, 4], callabackFn);
        $ERROR("Error: Expected to throw a TypeError but reduceRight didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
