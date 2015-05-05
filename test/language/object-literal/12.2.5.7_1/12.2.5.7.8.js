// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[ComputedPropertyName]] Computed property name of expressions
    with unary operator
---*/

var obj = {
    [-10 + "ish"] : 20
};

if (obj["-10ish"] !== 20) {
    $ERROR("Got a wrong value for the computed property. Actual : " + obj["-10ish"] + ". Expected : 20");
}
