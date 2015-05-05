// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated before they are consumed by find
includes: [TypedArrayHelper.js]
---*/

var array = [ 10, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
var savedPrev = 10;
function callbackFn(prev, current, currentIndex, obj) {
    arrayIndex++;
    if (arrayIndex >= array.length) {
        arrayIndex %= array.length;
        savedPrev = 10;
    }
    obj[currentIndex + 1] = 10;

    if (current !== 10) {
        $ERROR("Value mismatch in callbackFn at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : 10");
    }
    if (currentIndex !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + arrayIndex);
    }
    if (savedPrev && savedPrev !== prev) {
        $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + savedPrev);
    }

    savedPrev = prev + current;
    return savedPrev;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].reduce(callbackFn, 10);
    if (output !== 80) {
        $ERROR("Reduce was expected to return 80 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
