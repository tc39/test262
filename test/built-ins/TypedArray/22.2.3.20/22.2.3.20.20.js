// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns an object
includes: [TypedArrayHelper.js]
---*/

var resultObj = { value : 10 };
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = array.length - 1;
var savedPrev = null;
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
            arrayIndex = array.length - 1;
        }
        savedPrev = resultObj;

        return savedPrev;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    savedPrev = null;
    var output = typedArrays[i].reduceRight(callbackObj.callbackFn);
    if (output !== resultObj) {
        $ERROR("reduceRight was expected to return " + resultObj + " but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
