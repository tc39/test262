// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Element not found
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].lastIndexOf(65);
    if (index !== -1) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : -1");
    }
}
