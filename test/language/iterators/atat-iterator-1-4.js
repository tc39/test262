// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-4.js
---*/

if (!Uint8Array.prototype[Symbol.iterator]) {
    $ERROR("expected Uint8Array prototype to have an iterator");
} else if (Uint8Array.prototype[Symbol.iterator] !== Uint8Array.prototype.values) {
    $ERROR("expected Uint8Array prototypes Symbol.iterator to equal values");
}
