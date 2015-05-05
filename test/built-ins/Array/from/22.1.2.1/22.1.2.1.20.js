// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn throws an exception
---*/

var array = [ 2, 4, 8, 16, 32, 64, 128 ];
function mapFn(value, index, obj) {
    throw "Expected error";

    return 127;
}

var a = [];
try {
    a = Array.from(array, mapFn);
} catch (e) {
    if (e !== "Expected error") {
        $ERROR("Caught an unexpected error. Actual : " + e + ". Expected : Expected error");
    }
}

if (a.length != 0) {
    $ERROR("Length mismatch. Mapped Array : " + mappedArray.length + ". Expected : 0");
}
