// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[ComputedProperty]] ComputedProperty with __proto__"
---*/

var e = {
    [false]: 10,
    __proto__: Number
}

if (e[false] !== 10) {
    $ERROR("Value of 10 is expected for the property false");
}
if (e.__proto__ !== Number) {
    $ERROR("The property __proto__ is expected to be Number");
}
