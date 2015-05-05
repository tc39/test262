// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If value and ToInteger(value) are not same throw a RangeError
author: Murat Sutunc
---*/

var error;

try {
    String.fromCodePoint(1.1);
} catch(e) {
    error = e;
}

if (error === undefined) {
    $ERROR("Expected to throw an error but no error was thrown");
} else if (error.name !== "RangeError") {
    $ERROR("Expected to throw a RangeError but got " + error.name + " instead");
}
