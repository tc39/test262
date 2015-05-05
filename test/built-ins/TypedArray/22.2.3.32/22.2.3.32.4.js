// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "TODO: Fix this test case"
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayTypes(array);
var obj = {};
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i][Symbol.toStringTag].call(obj);
        $ERROR("A TypeError was expceted before this statement.");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("A TypeError was expceted but got " + e);
        }
    }
}
