// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-12.js
---*/

if (!Map.prototype[Symbol.iterator]) {
    $ERROR("expected Map prototype to have an iterator");
} else if (Map.prototype[Symbol.iterator] !== Map.prototype.entries) {
    $ERROR("expected Map prototypes Symbol.iterator to equal entries");
}
