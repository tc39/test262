// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Constructor is assigned null before calling slice
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    typedArrays[i].constructor = null;
    try {
        var output = typedArrays[i].slice();
        $ERROR("TypeError was expected to be thrown before this statement");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("TypeError was expected to be thrown, but got " + error);
        }
    }
}
