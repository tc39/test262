// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[ComputedPropertyName]] Expression with array elements"
---*/

var a = [ 'a', 'b', 'c', 'd' ];
var obj = {
    [a[0] + a[1]] : 20
};

if (obj.ab !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj.ab + ". Expected : 20");
}
