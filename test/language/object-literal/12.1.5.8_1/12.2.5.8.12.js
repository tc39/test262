// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Computed property name as a binary expression
includes:
---*/

var prop = "property";
var obj = {
    [prop + 1] : 20
};

if (obj.property1 !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.property1 + ". Expected : 20");
}
