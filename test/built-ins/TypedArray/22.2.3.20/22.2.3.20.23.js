// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated before they are consumed by find
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = 7;
var savedPrev = {};
function callbackFn(prev, current, currentIndex, obj) {
    arrayIndex--;
    if (current !== array[currentIndex]) {
        $ERROR("Value mismatch in predicate at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : 10");
    }
    if (currentIndex !== arrayIndex) {
        $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + arrayIndex);
    }
    if (arrayIndex == 0) {
        arrayIndex = array.length;
    }
    prev.value += current;
    savedPrev = prev;
    return savedPrev;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    savedPrev = { value : 10 };
    var output = typedArrays[i].reduceRight(callbackFn, savedPrev);
    if (output.value !== 263) {
        $ERROR("reduceRight was expected to return 263 but returned " + output.value + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
