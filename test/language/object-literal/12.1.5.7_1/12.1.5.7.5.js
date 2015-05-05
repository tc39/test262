// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property name with comma
    expression
---*/

var a = "prop", b = "Name";
var obj = {
    [(a, b)] : 20
};

if (obj.Name !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.Name + ". Expected : 20");
}
