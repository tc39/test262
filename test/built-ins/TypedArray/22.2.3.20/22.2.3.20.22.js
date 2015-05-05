// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Empty array with initial value
includes: [TypedArrayHelper.js]
---*/

var array = [  ];
function callbackFn(prev, current, currentIndex, obj) {
    $ERROR("Value mismatch in mapFn at callbackFn " + currentIndex + " for " + obj[Symbol.toStringTag] + ". Actual : " + current + ". Expected : " + array[arrayIndex]);
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    savedPrev = 10;
    var output = typedArrays[i].reduceRight(callbackFn, savedPrev);
    if (output !== 10) {
        $ERROR("Got a wrong value from reduceRight for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + output + ". Expected : 10");
    }
}
