// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this argument is not an object will cause type error
includes: [TypedArrayHelper.js]
---*/

//


function mapFn(value, index) {
    $ERROR("mapFn is not expected to be called. Called for " + value + " and index " + index);
}

var array = [ ];
var j = 0;
var typedArrays = CreateTypedArrayTypes();
for (i = 0; i < typedArrays.length; i++) {
    try {
        typedArrays[i].from.call("String");
        $ERROR("Expected to throw a TypeError but from didn't throw");
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Expected to throw a TypeError but got " + e + " instead");
        }
    }
}
