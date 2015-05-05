// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property tries to delete the
    current object itself
---*/

var a = 10;
var obj = {
    a,
    [delete obj] : 30
}

if (obj.a !== 10) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.a + ". Expected : 10");
}

if (obj[false] !== 30) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[false] + ". Expected : 30");
}
