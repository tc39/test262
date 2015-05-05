// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Empty array with initial value
includes: [TypedArrayHelper.js]
---*/

var array = [  ];
function callbackFn(prev, current, currentIndex, obj) {
    $ERROR("callbackFn is not expected to be called. Called for " + current + " and index " + index);
}

var savedPrev = 10;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].reduce(callbackFn, savedPrev);
    if (output !== savedPrev) {
        $ERROR("Find was expected to return 40 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
