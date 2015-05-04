// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Source is an object with length property and one item is deleted
    from the source
---*/

//

var array = [2, 4, 0, 16];
var expectedArray = [2, 4, , 16];
var obj = {
    length : 4,
    0 : 2,
    1 : 4,
    2 : 0,
    3 : 16
}
delete obj[2];
var a = Array.from.call(Object, obj);
if (typeof(a) !== "object") {
    $ERROR("The returned type is expected to be object");
}
for (j = 0; j < expectedArray.length; j++) {
    if (expectedArray[j] != a[j]) {
        $ERROR("Elements mismatch at " + j + ". Actual : " + a[j] + ", Expected : " + expectedArray[j]);
    }
}
