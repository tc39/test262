// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[IdentifierReference]] Unicode string for IdentifierReference"
---*/

var A = 10;
var obj = {
    \u0041
};

if (obj.A !== 10) {
    $ERROR("Got a wrong value for the property A. Actual : " + obj.A + ". Expected : 10");
}
