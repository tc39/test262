// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn returns a non-integer
es6id: 22.1.2.1
---*/

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
var arrayIndex = -1;
function mapFn(value, index) {
    this.arrayIndex++;
    assert.sameValue(value, array[this.arrayIndex], "Value mismatch in mapFn at index " + index + ".");
    assert.sameValue(index, this.arrayIndex, "Index mismatch in mapFn.");

    return {
        val : 127,
        get value() {
            return this.val;
        }
    };
}


var a = Array.from(array, mapFn, this);
assert.sameValue(a.length, array.length, "Length mismatch. array : " + array.length + ". Mapped array : " + a.length + ".");
for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j].value, 127, "Element mismatch for mapped array at index " + j + ".");
}
