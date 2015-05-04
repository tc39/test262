// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property cascaded with
    redefining the same object
---*/

var a = 10;
var obj = {
    a,
    [obj = {
        c : 20
    }] : 30
}

if (obj.a !== 10) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.a + ". Expected : 10");
}

if (obj["[object Object]"] !== 30) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj["[object Object]"] + ". Expected : 30");
}
