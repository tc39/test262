// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Null is not coercible
author: Murat Sutunc
---*/

var error;

try {
    "err".codePointAt.apply(null,[0,0]);
} catch(e) {
    error = e;
}

if (error === undefined) {
    $ERROR("Expected to throw an error but no error was thrown");
} else if (error.name !== "TypeError") {
    $ERROR("Expected to throw a TypeError but got " + error.name + " instead");
}
