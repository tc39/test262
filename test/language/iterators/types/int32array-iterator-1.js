// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: int32array-iterator-1.js
---*/

var error;

try {
    for (result of Int32Array.prototype[Symbol.iterator].call(undefined)) { }
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('expected iteration to throw an error but it did not');
} else if (error.name !== 'TypeError') {
    $ERROR('expected to have TypeError got ' + error.name + ' instead');
}
