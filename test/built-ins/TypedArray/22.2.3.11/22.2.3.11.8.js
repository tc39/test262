// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this object not a TypedArray will cause a TypeError
includes: [TypedArrayHelper.js]
---*/

function predicate(value, index, obj) {
    $ERROR("predicate is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].findIndex.call([2, 3, 4], predicate);
        $ERROR("Error: Expected to throw a TypeError but findIndex didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
