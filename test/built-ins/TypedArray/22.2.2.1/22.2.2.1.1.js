// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Length of the from method is 1
includes: [TypedArrayHelper.js]
---*/

var typedArrays = CreateTypedArrayTypes();
for (i = 0; i < typedArrays.length; i++) {
    if (typedArrays[i].from.length != 1) {
        $ERROR("Lenght of " + typedArrays[i] + " is not 1");
    }
}
