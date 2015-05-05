// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "TODO: ArrayBuffer test case"
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayBuffer = new ArrayBuffer(...array);
var arrayIndex = array.length - 1;
var    savedPrev = null;
var callbackObj = {

    callbackFn(prev, current, currentIndex, obj) {
        this.arrayIndex--;
        if (current !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in callbackFn at index " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[this.arrayIndex]);
        }
        if (currentIndex !== this.arrayIndex) {
            $ERROR("Index mismatch in callbackFn for " + obj[Symbol.toStringTag] + ". Actual : " + currentIndex + ". Expected : " + this.arrayIndex);
        }
        if (savedPrev && savedPrev !== prev) {
            $ERROR("Got a wrong previous value for " + obj[Symbol.toStringTag] + ". Actual : " + prev + ". Expected : " + savedPrev);
        }
        if (this.arrayIndex == 0) {
            this.arrayIndex = array.length - 1;
        }

        savedPrev = current;
        return savedPrev;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    savedPrev = null;
    var output = typedArrays[i].reduceRight(callbackObj.callbackFn);
    if (output !== array[0]) {
        $ERROR("reduceRight was expected to return " + array[0] + " but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
