// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-7.js
---*/

if (Function.prototype[Symbol.iterator]) {
    $ERROR("expected Function prototype to not have an iterator");
}
