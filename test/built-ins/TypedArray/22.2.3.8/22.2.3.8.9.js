// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Array is passed as this object
includes: [TypedArrayHelper.js]
---*/

var array = [ 127, 127, 127, 127, 127, 127, 127 ];
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].fill.call([ 127, 127, 127, 127, 127, 127, 127 ], 5, 4, 0);
        $ERROR("TypeError was expected to be thrown before this statement.");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("TypeError was expected to be thrown but got " + error + " instead.");
        }
    }
}
