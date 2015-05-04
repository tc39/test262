// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-7.js
---*/

if (!Uint16Array.prototype[Symbol.iterator]) {
    $ERROR("expected Uint16Array prototype to have an iterator");
} else if (Uint16Array.prototype[Symbol.iterator] !== Uint16Array.prototype.values) {
    $ERROR("expected Uint16Array prototypes Symbol.iterator to equal values");
}
