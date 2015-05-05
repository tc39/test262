// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source array with boundary values
includes: [TypedArrayHelper.js]
---*/

var array = [ Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY ];

var predicateObj = {
    arrayIndex : -1,
    predicate(value, index, obj) {
        this.arrayIndex = (this.arrayIndex + 1) % (array.length);

        if (index != 2 && value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        } else if (index == 2 && !isNaN(value)) {
            $ERROR("Value mismatch in mapFn at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : NaN");
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in mapFn for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        return false;
    }
}

var typedArrayTypes = CreateTypedRedcuedSetOfArrayTypes(array);
for (i = 0; i < typedArrayTypes.length; i++) {
    var typedArray = typedArrayTypes[i].from(array);
    var output = typedArray.find(predicateObj.predicate, predicateObj);
    if (output !== undefined) {
        $ERROR("Find was expected to return undefined but returned " + output + " for " + typedArray[Symbol.toStringTag]);
    }
}
