// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Empty source array
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrays = CreateTypedArrayInstances(array);

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].indexOf(8);
    if (index !== -1) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : -1");
    }
}

for (i = 0; i < typedArrays.length; i++) {
    var index = typedArrays[i].indexOf(8, 5);
    if (index !== -1) {
        $ERROR("Got wrong index as output. Actual " + index + ". Expceted : -1");
    }
}
