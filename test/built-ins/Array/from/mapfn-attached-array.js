// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn is attached to the Array itself
es6id: 22.1.2.1
---*/

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
var a = [];
var i = 0;
Array.prototype.mapFn = function(value, index) {
    assert.sameValue(value, array[i], "Value mismatch in mapFn at index " + index + ".");
    assert.sameValue(index, i, "Index mismatch in mapFn.");
    i++;

    return 127;
};

a = Array.from(array, a.mapFn , a);
assert.sameValue(a.length, array.length, "Length mismatch. array : " + array.length + ". Mapped array : " + a.length + ".");

for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j], 127, "Element mismatch for mapped array at index " + j + ".");
}
