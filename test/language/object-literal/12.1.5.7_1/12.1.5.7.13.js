// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property name that invokes an
    Object method
---*/

var obj = {
    [Object.defineProperty(this, "prop", {
        value : 20,
        writeable : true,
        configurable : true,
        enumerable : true
    }).prop] : 10,
};

if (obj[20] !== 10) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[20] + ". Expected : 10");
}

if (prop !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + prop + ". Expected : 20");
}
