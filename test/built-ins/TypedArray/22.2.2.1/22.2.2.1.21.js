// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this object not a TypedArray, but an object
includes: [TypedArrayHelper.js]
---*/

function mapFn(value, index) {
    return value;
}

var array = [2, 4, 0, 16];
var obj = {};
obj.length = 4;
obj[0] = 2;
obj[1] = 4;
obj[2] = 0;
obj[3] = 16;
var j = 0;
var typedArrays = CreateTypedArrayTypes();
for (i = 0; i < typedArrays.length; i++) {
    var newObj = typedArrays[i].from.call(Object, obj);

    if (typeof(newObj) != "object") {
        $ERROR("Returned object was expected to be of type Object but got " + typeof(newObj) + " instead");
    }
    if (undefined != newObj.length) {
        $ERROR("Length mismatch for the new array. Actual : " + newObj.length + ", Expected : undefined");
    }
    for (j = 0; j < array.length; j++) {
        if (array[j] != newObj[j]) {
            $ERROR("Elements mismatch for " + typedArrays[i] + " at " + j + ". Actual : " + newObj[j] + ", Expected : " + array[j]);
        }
    }
}
