// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Passing a valid array
es6id: 22.1.2.1
---*/

var array = [ 0, 1, -2, 4, -8, 16 ];
var a = Array.from(array);
for (var j = 0; j < a.length; j++) {
    assert.sameValue(a[j], array[j], "Elements mismatch at " + j + ".");
}
