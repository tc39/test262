// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source is an object without length property
---*/

//

var obj = {
    0: 2,
    1: 4,
    2: 8,
    3: 16
}

var a = Array.from(obj);
if (a.length !== 0) {
    $ERROR("Expected an array of length 0. Actual : " + a.length);
}
