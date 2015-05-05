// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Search with a number higher than the bit size for some typed arrays
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 8, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].indexOf(1024 * 1024);
    if (index !== -1) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : -1");
    }
}
