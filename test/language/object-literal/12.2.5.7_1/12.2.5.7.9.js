// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[ComputedPropertyName]] Computed property name with void type"
---*/

var a = 9;
var obj = {
    [void ++a] : 20
};

if (obj[undefined] !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[undefined] + ". Expected : 20");
}
