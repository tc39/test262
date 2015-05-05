// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: fromIndex at the end of the array
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 8, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].lastIndexOf(1, 7);
    if (index !== 0) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : 0");
    }
}
