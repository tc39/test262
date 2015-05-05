// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns both positive and negative values
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = 7;
var    savedPrev = 10;
var callbackObj = {
    callbackFn(prev, current, currentIndex, obj) {
        arrayIndex--;
        if (current !== array[arrayIndex]) {
            $ERROR("Value mismatch in callbackFn at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[arrayIndex]);
        }
        if (currentIndex !== arrayIndex) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + arrayIndex);
        }
        if (savedPrev && savedPrev !== prev) {
            $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + savedPrev);
        }
        if (arrayIndex == 0) {
            arrayIndex = array.length;
        }
        savedPrev = prev + (currentIndex % 2 == 0 ? -10 : 10);

        return savedPrev;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    savedPrev = 10;
    var output = typedArrays[i].reduceRight(callbackObj.callbackFn, savedPrev);
    if (output !== 0) {
        $ERROR("Find was expected to return 0 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
