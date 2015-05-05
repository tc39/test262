// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Add elements to the typed array in predicate
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];

var predicateObj = {
    arrayIndex : -1,
    predicate(value, index, obj) {
        this.arrayIndex = (this.arrayIndex + 1) % array.length;
        if (value !== array[this.arrayIndex]) {
            $ERROR("Value mismatch in predicate at index " + index + " for " + obj[Symbol.toStringTag] + ". Actual : " + value + ". Expected : " + array[this.arrayIndex]);
        }
        if (index !== this.arrayIndex) {
            $ERROR("Index mismatch in predicate for " + obj[Symbol.toStringTag] + ". Actual : " + index + ". Expected : " + this.arrayIndex);
        }

        Object.defineProperty(obj, (array.length + this.arrayIndex).toString(), {
            enumerable: true,
            configurable: false,
            writable: true,
            value: array[this.arrayIndex] + 1
        });

        return index == array.length - 1 ? true : false;
    }
}

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].findIndex(predicateObj.predicate, predicateObj);
    if (output !== array.length - 1) {
        $ERROR("findIndex was expected to return " + array.length - 1 + " but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
