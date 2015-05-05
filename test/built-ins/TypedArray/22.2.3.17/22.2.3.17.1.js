// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Make sure that the length property has the right descriptor
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    if (7 !== typedArrays[i].length) {
        $ERROR("Length of the typed array is expected to be 7, but got " + typedArrays[i].length + " instead");
    }
    var desc = Object.getOwnPropertyDescriptor(typedArrays[i].__proto__.__proto__, "length");
    for (i in desc) {
        if (i === "set" && desc[i] !== undefined) {
            $ERROR("Set method for length should be undefined");
        }
        if (i === "enumerable" && desc[i] !== false) {
            $ERROR("Enumerable property for length should be false");
        }
        if (i === "configurable" && desc[i] !== true) {
            $ERROR("Configurable property for length should be true");
        }
    }
}
