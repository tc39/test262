// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-3.js
---*/

if (!Int8Array.prototype[Symbol.iterator]) {
    $ERROR("expected Int8Array prototype to have an iterator");
} else if (Int8Array.prototype[Symbol.iterator] !== Int8Array.prototype.values) {
    $ERROR("expected Int8Array prototypes Symbol.iterator to equal values");
}
