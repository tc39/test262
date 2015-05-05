// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call findIndex method on empty array
includes: [TypedArrayHelper.js]
---*/

function predicate(value, index, obj) {
    $ERROR("predicate is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].findIndex(predicate);
    if (output !== -1)
    {
        $ERROR("findIndex was expected to return -1 but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
