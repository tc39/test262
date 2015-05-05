// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn is attached to the TypedArray itself
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var mappedArrays = [];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].arrayIndex = array.length - 1;
    typedArrays[i].savedPrev = null;
    typedArrays[i].callbackFn = function (prev, current, currentIndex, obj) {
        typedArrays[i].arrayIndex--;
        if (current !== array[typedArrays[i].arrayIndex]) {
            $ERROR("Value mismatch in predicate at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[typedArrays[i].arrayIndex]);
        }
        if (currentIndex !== typedArrays[i].arrayIndex) {
            $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + typedArrays[i].arrayIndex);
        }
        if (typedArrays[i].savedPrev && typedArrays[i].savedPrev !== prev) {
            $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + typedArrays[i].savedPrev);
        }

        typedArrays[i].savedPrev = prev + current;
        return typedArrays[i].savedPrev;
    };

    var output = typedArrays[i].reduceRight(typedArrays[i].callbackFn);
    if (output !== 253) {
        $ERROR("reduceRight was expected to return 253 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
