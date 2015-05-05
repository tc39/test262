// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Call find method on empty array
includes: [TypedArrayHelper.js]
---*/

function predicate(value, index, obj) {
    $ERROR("predicate is not expected to be called. Called for " + value + " and index " + index + "");
}

var array = [ ];
var j = 0;
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].find(predicate);
    if (output !== undefined)
    {
        $ERROR("Find was expected to return undefined but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
