// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Add a property to the global object in
    one computed property and use it in another
---*/

var obj = {
    [this.prop1 = 10] : "Hi",
    [this.prop1 + 20] : "Hello"
}

if (obj[10] !== "Hi") {
    $ERROR("Computed property has an invalid value. Actual : " + obj[10] + " Expected : Hi");
}

if (obj[30] !== "Hello") {
    $ERROR("Computed property has an invalid value. Actual : " + obj[10] + " Expected : Hello");
}
