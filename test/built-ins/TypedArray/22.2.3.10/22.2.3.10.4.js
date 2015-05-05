// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Elements are updated before they are consumed by find
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var arrayIndex = -1;
function predicate(value, index, obj) {
    arrayIndex = (arrayIndex + 1) % array.length;
    obj[index + 1] = 127;

    if (value !== 127) {
        $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : 127");
    }
    if (index !== arrayIndex) {
        $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + arrayIndex);
    }

    return false;
}

var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i][0] = 127;
    var output = typedArrays[i].find(predicate);
    if (output !== undefined) {
        $ERROR("Find was expected to return undefined but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
