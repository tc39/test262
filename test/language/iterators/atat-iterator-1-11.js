// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-11.js
---*/

if (!Float64Array.prototype[Symbol.iterator]) {
    $ERROR("expected Float64Array prototype to have an iterator");
} else if (Float64Array.prototype[Symbol.iterator] !== Float64Array.prototype.values) {
    $ERROR("expected Float64Array prototypes Symbol.iterator to equal values");
}
