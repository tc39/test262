// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source object has iterator
includes: [TypedArrayHelper.js]
---*/

//


var array = [ 1,3, 7, 15, 31, 63, 127 ];
var obj = {
    [Symbol.iterator]() {
        return {
            index: 0,
            next() {
                return {
                    value: this.val,
                    done: this.isDone
                };
            },
            isDone : false,
            get val() {
                this.index++;
                if (this.isDone == true) {
                    this.isDone = false;
                }
                if (this.index > 7) {
                    this.isDone = true;
                    this.index %= 7;
                }
                return (1 << this.index) - 1;
            }
        };
    }
}
var typedArrays = CreateTypedArraysFrom(obj);
for (i = 0; i < typedArrays.length; i++) {
    if (array.length != typedArrays[i].length) {
        $ERROR("Length mismatch for " + typedArrays[i][Symbol.toStringTag] + ". Actual : " + typedArrays[i].length + ", Expected : " + array.length);
    }
    for (j = 0; j < typedArrays[i].length; j++) {
        if (array[j] != typedArrays[i][j]) {
            $ERROR("Elements mismatch for " + typedArrays[i][Symbol.toStringTag] + " at " + j + ". Actual : " + typedArrays[i][j] + ", Expected : " + array[j]);
        }
    }
}
