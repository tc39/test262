// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: uint8clampedarray-iterator-2.js
---*/

var error;

try {
    for (result of Uint8ClampedArray.prototype[Symbol.iterator].call(null)) { }
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected iteration to throw an error but it did not');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError got ' + error.name + ' instead');
}
