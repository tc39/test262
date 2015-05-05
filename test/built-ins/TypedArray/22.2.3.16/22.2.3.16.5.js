// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array length is 1
includes: [TypedArrayHelper.js]
---*/

var array = [ 1 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].lastIndexOf(1);
    if (index !== 0) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : 0");
    }
}

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].lastIndexOf(4);
    if (index !== -1) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : -1");
    }
}
