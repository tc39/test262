// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Add a property to the global object in
    one computed property, delete in another and use it in another
---*/

var obj = {
    [this.prop1 = 10] : "A",
    [delete this.prop1] : "B",
    [this.prop1] : "C"
}

if (obj[10] !== "A") {
    $ERROR("Computed property has an invalid value. Actual : " + obj[10] + " Expected : A");
}

if (obj[true] !== "B") {
    $ERROR("Computed property has an invalid value. Actual : " + obj[true] + " Expected : B");
}

if (obj[undefined] !== "C") {
    $ERROR("Computed property has an invalid value. Actual : " + obj[undefined] + " Expected : C");
}
