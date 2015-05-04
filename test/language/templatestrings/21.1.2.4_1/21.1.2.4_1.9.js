// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Wrong call site object input to String.raw"
---*/

var obj = new Object();
obj.toString = null;
obj.valueOf = null;

var siteObj = [obj];
siteObj.raw = [obj];

var error;
try {
    String.raw(siteObj);
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR("Expected to throw an error but no error was thrown");
} else if (error.name !== "TypeError") {
    $ERROR("Expected to throw a TypeError but got " + error.name + " instead");
}
