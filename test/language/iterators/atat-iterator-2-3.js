// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-2-3.js
---*/

if (DataView.prototype[Symbol.iterator]) {
    $ERROR("expected DataView prototype to not have an iterator");
}
