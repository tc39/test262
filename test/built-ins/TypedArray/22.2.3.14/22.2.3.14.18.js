// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Don't pass anything as this
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];
var sepObj = {
    get separator() {
        throw "Error";
    }
};
var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    try {
        var output = typedArrays[i].join(sepObj.separator);
        $ERROR("Join was expected to throw an error for " + typedArrays[i][Symbol.toStringTag]);
    } catch (error) {
        if (error !== "Error") {
            $ERROR("Join was expected to throw Error for " + typedArrays[i][Symbol.toStringTag] + ", but got " + error + " instead");
        }
    }
}
