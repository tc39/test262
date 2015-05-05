// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Testing String.raw without any arguments"
---*/

var error;
try {
    var output = String.raw();
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR("Expected to throw an error but no error was thrown");
} else if (error.name !== "TypeError") {
    $ERROR("Expected to throw a TypeError but got " + error.name + " instead");
}
