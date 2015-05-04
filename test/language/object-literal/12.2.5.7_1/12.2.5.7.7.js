// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property name with a library
    method invocation
---*/

var str1 = "Lif", str2 = "e";
var obj = {
    [str1.concat(str2)] : 42
};
if (obj.Life !== 42) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.Life + ". Expected : 42");
}
