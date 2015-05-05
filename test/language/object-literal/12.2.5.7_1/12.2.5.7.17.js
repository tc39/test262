// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Verify the property descriptors for
    computed property
---*/

var a = 10;
var obj = {
    a,
    func1 () {},
    ["prop" + "1"] : "Property1"
}
var count = 0;
for (p in obj) {
    count++;
    var descriptor = Object.getOwnPropertyDescriptor(obj, p);
    if (!descriptor.configurable) {
        $ERROR("Property " + p + " is not configurable");
    }
    if (!descriptor.writable) {
        $ERROR("Property " + p + " is not writeable");
    }
    if (!descriptor.enumerable) {
        $ERROR("Property " + p + " is not enumerable");
    }
}
if (count != 3) {
    $ERROR("Wrong number of properties properties. Expected : 3 Actual : " + count);
}
