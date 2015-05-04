// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-6.js
---*/

if (!Int16Array.prototype[Symbol.iterator]) {
    $ERROR("expected Int16Array prototype to have an iterator");
} else if (Int16Array.prototype[Symbol.iterator] !== Int16Array.prototype.values) {
    $ERROR("expected Int16Array prototypes Symbol.iterator to equal values");
}
