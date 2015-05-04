// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[ComputedPropertyName]] Computed property name as an eval"
---*/

var a = 20, b = 30;
var obj = {
    [eval("a + b")] : 70
};

if (obj[50] !== 70) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[50] + ". Expected : 70");
}
