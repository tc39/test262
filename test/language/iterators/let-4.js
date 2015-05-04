// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: let-4.js
---*/

var error;

try {
    eval('for (let var of [1,2,3]) {}');
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected to throw an error but no error was thrown');
} else if (error.name !== 'SyntaxError') {
    $ERROR('expected to have SyntaxError, got ' + error.name + ' instead');
}
