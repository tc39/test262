// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Valid callbackFn
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = 0;
var savedPrev = array[0];
function callbackFn(prev, current, currentIndex, obj) {
    arrayIndex++;
    if (current !== array[arrayIndex]) {
        $ERROR("Value mismatch in callbackFn at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[arrayIndex]);
    }
    if (currentIndex !== arrayIndex) {
        $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + arrayIndex);
    }
    if (savedPrev && savedPrev !== prev) {
        $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + savedPrev);
    }

    if (arrayIndex == array.length - 1) {
        arrayIndex = 0;
    }
    savedPrev = prev + current;

    return savedPrev;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].reduce(callbackFn);
    savedPrev = array[0];
    if (output !== 253) {
        $ERROR("Got a wrong value from reduce for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + output + ". Expected : 253");
    }
}
