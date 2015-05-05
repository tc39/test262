// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Computed property with delete operation
includes:
---*/

var a = 10;
var obj = {
    a,
    [delete this.a] : 20
}

if (obj[false] !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[false] + ". Expected : 20");
}
