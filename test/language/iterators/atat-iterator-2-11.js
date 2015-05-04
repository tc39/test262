// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-11.js
---*/

if (ReferenceError.prototype[Symbol.iterator]) {
    $ERROR("expected ReferenceError prototype to not have an iterator");
}
