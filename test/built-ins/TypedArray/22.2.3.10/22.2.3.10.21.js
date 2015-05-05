// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: predicate returns true for first element
includes: [TypedArrayHelper.js]
---*/

var superArrayIndex = 0;
var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var arrayIndex = 0;
function predicate(value, index, obj) {
    if (value !== array[arrayIndex]) {
        $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[arrayIndex]);
    }

    if (index == 0) {
        return true;
    }

    $ERROR("Code is supposed to reach this line for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    return false;
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].find(predicate);
    if (output !== 2) {
        $ERROR("Find was expected to return 2 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
