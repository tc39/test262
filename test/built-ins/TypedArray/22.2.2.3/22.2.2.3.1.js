// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Verify that prototype object has the correct descriptor
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrayTypes = CreateTypedArrayTypes(array);
for (i = 0; i < typedArrayTypes.length; i++) {
    var descriptor = Object.getOwnPropertyDescriptor(typedArrayTypes[i], "prototype");

    for (prop in descriptor) {
        if (prop === "value") {
            // Do nothing
        } else {
            if (descriptor[prop] !== false) {
                WScript.Echo("The property " + prop + " of " + typedArrayTypes[i][Symbol.toStringTag] + " should be false, but got got true");
            }
        }
    }
}
