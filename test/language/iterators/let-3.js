// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: let-3.js
---*/

var error;

try {
    eval('for (var let of [1,2,3]) {}');
} catch (e) {
    error = e;
}

if (error !== undefined) {
    $ERROR('expected to run without an error but an error was thrown');
}
