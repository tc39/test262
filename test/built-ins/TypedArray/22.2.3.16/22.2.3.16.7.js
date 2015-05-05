// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Match last element
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].lastIndexOf(127);
    if (index !== 7) {
        $ERROR("Got wrong index as output for " + typedArrays[i][Symbol.toStringTag] + ". Actual " + index + ". Expceted : 7");
    }
}
