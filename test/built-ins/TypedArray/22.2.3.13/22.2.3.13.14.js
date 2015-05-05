// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array with the same element at all indices
includes: [TypedArrayHelper.js]
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];
var typedArrayTypes = CreateTypedRedcuedSetOfArrayTypes(array);

for (startIndex = 0; startIndex < array.length; startIndex++) {
    for (i = 0; i < typedArrayTypes.length; i++) {
        var typedArray = typedArrayTypes[i].from(array);
        var index = typedArray.indexOf(array[startIndex], startIndex);
        if (index !== startIndex) {
            $ERROR("Got wrong index as output while searching for " + array[startIndex] + " in " + typedArray[Symbol.toStringTag] + ". Actual " + index + ". Expceted : " + startIndex);
        }
    }
}
