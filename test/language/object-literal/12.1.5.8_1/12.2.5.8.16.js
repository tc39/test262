// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Expression resulting in a keyword
includes:
---*/

var obj = {
    a : 10,
    ["en" + "um"] : 20
};

if (obj.a !== 10) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.a + ". Expected : 10");
}

if (obj.enum !== 20) {
    $ERROR("Got a wrong value for the computed property enum. Actual : " + obj.enum + ". Expected : 20");
}
