// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Pass a string as this to toString
includes: [TypedArrayHelper.js]
---*/

var array = [ 2, 4, 8, 16, 32, 64, 127 ];

var typedArrays = CreateTypedArrayInstances(array);
for (i = 0; i < typedArrays.length; i++) {
    var output = typedArrays[i].toString.call("String");
    if (output !== "[object String]") {
        $ERROR("toString was expected to return [object String] but returned " + output + " for " + typedArrays[i][Symbol.toStringTag]);
    }
}
