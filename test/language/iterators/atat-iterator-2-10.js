// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-10.js
---*/

if (RangeError.prototype[Symbol.iterator]) {
    $ERROR("expected RangeError prototype to not have an iterator");
}
