// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn is invalid causes a TypeError
---*/

var obj = {};
var array = [ ];
try {
    Array.from(array, obj);
    $ERROR("Error: Expected to throw a TypeError but map didn't throw");
} catch (e) {
    if (!(e instanceof TypeError)) {
        $ERROR("Error: Expected to throw a TypeError but got " + e + " instead");
    }
}
