// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn tries to delete elements from the typed array
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
var savedPrev = 10;
function callbackFn(prev, current, currentIndex, obj) {
    arrayIndex++;
    if (arrayIndex >= array.length) {
        arrayIndex %= array.length;
        savedPrev = 10;
    }
    if (current !== array[arrayIndex]) {
        $ERROR("Value mismatch in callbackFn at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[arrayIndex]);
    }
    if (currentIndex !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + arrayIndex);
    }
    if (savedPrev && savedPrev !== prev) {
        $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + savedPrev);
    }

    if (currentIndex == 0) {
        delete typedArrays[i];
    }

    savedPrev = prev + current;
    return savedPrev;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].reduce(callbackFn, 10);
    if (output !== 263) {
        $ERROR("Reduce was expected to return 263 but returned " + output + " for index " + i);
    }
}
