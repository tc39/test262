// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Invoke the method with other typed array types
includes: [TypedArrayHelper.js]
---*/

var array = [ 1, 2, 4, 8, 16, 32, 64, 127 ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].indexOf.call(typedArrays[(i + 1) % typedArrays.length], 8);
    if (index !== 3) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : 3");
    }
}
