// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: map is called by passing null for thisArg
es6id: 22.1.2.1
---*/

var arrayIndex = -1;
var array = [ 2, 4, 8, 16, 32, 64, 128 ];

function mapFn(value, index) {
    arrayIndex++;
    assert.sameValue(value, array[arrayIndex], "Value mismatch in mapFn at index " + index + ".");
    assert.sameValue(index, arrayIndex, "Index mismatch in mapFn.");

    return array[arrayIndex];
}


var a = Array.from(array, mapFn, null);
assert.sameValue(a.length, array.length, "Length mismatch. array : " + a.length + ". Original array : " + array.length + ".");
for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j], array[j], "Element mismatch for mapped array.");
}
