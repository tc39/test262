// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing a non-constructor as this cause TypeError
includes: [TypedArrayHelper.js]
---*/

var array = [ ];
var typedArrayTypes = CreateTypedArrayTypes();
for (i = 0; i < typedArrayTypes.length; i++) {
    try {
        var typedArray = typedArrayTypes[i].of.call("Non-Constructor", array);
        $ERROR("An expected TypeError was not thrown");
    } catch (error) {
        if (!(error instanceof TypeError)) {
            $ERROR("A TypeError was expected to be thrown but got " + error + " instead");
        }
    }
}
