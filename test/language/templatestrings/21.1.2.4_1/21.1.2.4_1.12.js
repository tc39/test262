// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Substitutions array is null"
---*/

var callSite = [];
callSite.raw = ['a', 'c', 'e'];
var substitutions = null;

var error;
try {
    var str = String.raw(callSite, ...substitutions);
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR("Expected to throw an error but no error was thrown");
} else if (error.name !== "TypeError") {
    $ERROR("Expected to throw a TypeError but got " + error.name + " instead");
}
