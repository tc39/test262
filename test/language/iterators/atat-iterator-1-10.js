// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-10.js
---*/

if (!Float32Array.prototype[Symbol.iterator]) {
    $ERROR("expected Float32Array prototype to have an iterator");
} else if (Float32Array.prototype[Symbol.iterator] !== Float32Array.prototype.values) {
    $ERROR("expected Float32Array prototypes Symbol.iterator to equal values");
}
