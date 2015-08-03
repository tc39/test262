// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Calling from with a valid map function with thisArg
es6id: 22.1.2.1
---*/

var array = [ 0, 1, -2, 4, -8, 16 ];
var arrayIndex = -1;
function mapFn (value, k) {

    arrayIndex++;
    assert.sameValue(value, array[arrayIndex], "In mapFn element mismatch for index " + arrayIndex + " in the mapFn.");
    assert.sameValue(k, arrayIndex, "From mapFn index mismatch for " + arrayIndex + ".");

    return value;
}

var a = Array.from(array, mapFn, this);
for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j], array[j], "Elements mismatch at " + j + ".");
}
