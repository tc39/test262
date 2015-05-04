// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source object has iterator
---*/

//

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
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
                if (this.index > 7) {
                    this.isDone = true;
                }
                return 1 << this.index;
            }
        };
    }
}
var a = Array.from.call(Object, obj);
if (typeof(a) !== typeof({})) {
    $ERROR("The returned type is expected to be object");
}
for (j = 0; j < a.length; j++) {
    if (array[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + array[j]);
    }
}
