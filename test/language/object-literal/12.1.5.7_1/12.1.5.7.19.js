// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[IdentifierReference]] Behaviour of IdentifierReference with
    duplicate computed properties
---*/

var str1 = "prop";
var prop1 = 30;
var obj = {
    [str1 + 1] : 10,
    [str1 + 1] : function() { return 20; },
    prop1
};

if (obj.prop1 !== 30) {
    $ERROR("Got a wrong value for the property prop1. Actual : " + obj.prop1 + ". Expected : 30");
}
