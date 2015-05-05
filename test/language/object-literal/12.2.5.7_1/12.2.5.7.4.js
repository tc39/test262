// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property name with self
    executing method
---*/

var a = "prop", b = "Name";
var obj = {
    [(function(a, b) { return a + b;})(a, b)] : 20
};

if (obj.propName !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.propName + ". Expected : 20");
}
