// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-15.js
---*/

if (TypeError.prototype[Symbol.iterator]) {
    $ERROR("expected TypeError prototype to not have an iterator");
}
