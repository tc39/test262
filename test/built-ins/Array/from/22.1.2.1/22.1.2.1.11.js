// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source object has iterator which throws
---*/

//

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
var obj = {
    [Symbol.iterator]() {
        return {
            index: 0,
            next() {
                throw "Expected Error";
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
try {
    var a = Array.from(obj);
    $ERROR("Didn't throw an expected error");
} catch (error) {
    if (error !== "Expected Error") {
        $ERROR("Caught an unexpected error. Actual : " + error);
    }
}
