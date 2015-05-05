// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[PropName]] Property name as a numeric literal"
---*/

var obj = {
    10 : 20
};

if (obj[10] !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj[10] + ". Expected : 20");
}
