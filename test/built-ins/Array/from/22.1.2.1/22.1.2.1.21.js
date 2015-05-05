// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source is an object with missing values
---*/

//

var array = [2, 4, , 16];
var obj = {
    length: 4,
    0: 2,
    1: 4,
    3: 16
}

var a = Array.from.call(Object, obj);
if (typeof (a) !== "object") {
    $ERROR("The returned type is expected to be object, but got " + typeof(a) + " instead");
}
for (j = 0; j < a.length; j++) {
    if (array[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + array[j]);
    }
}
