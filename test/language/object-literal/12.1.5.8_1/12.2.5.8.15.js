// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Redefining an existing property
includes:
---*/

var a = 10;
var obj = {
    a,
    ["a"] : 20
};

if (obj.a !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.a + ". Expected : 20");
}
