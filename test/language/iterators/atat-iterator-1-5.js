// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-5.js
---*/

if (!Uint8ClampedArray.prototype[Symbol.iterator]) {
    $ERROR("expected Uint8ClampedArray prototype to have an iterator");
} else if (Uint8ClampedArray.prototype[Symbol.iterator] !== Uint8ClampedArray.prototype.values) {
    $ERROR("expected Uint8ClampedArray prototypes Symbol.iterator to equal values");
}
