// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Invalid predicate causes a TypeError
includes: [TypedArrayHelper.js]
---*/

var obj = {};
var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].findIndex(obj);
        $ERROR("Error: Expected to throw a TypeError but findIndex didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
