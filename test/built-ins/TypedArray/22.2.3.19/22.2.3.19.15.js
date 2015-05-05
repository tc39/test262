// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: callbackFn returns multiple values
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = -1;
var    savedPrev = 10;
var callbackObj = {
    callbackFn(prev, current, currentIndex, obj) {
        this.arrayIndex++;
        if (current !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in callbackFn at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[this.arrayIndex]);
        }
        if (currentIndex !== this.arrayIndex) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + this.arrayIndex);
        }
        if (savedPrev && savedPrev !== prev) {
            $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + savedPrev);
        }
        if (this.arrayIndex == array.length - 1) {
            this.arrayIndex = -1;
        }
        savedPrev = prev + (currentIndex % 2 == 0 ? 0 : 10);

        return savedPrev;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    savedPrev = 10;
    var output = typedArrays[i].reduce(callbackObj.callbackFn, savedPrev);
    if (output !== 40) {
        $ERROR("Find was expected to return 40 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
