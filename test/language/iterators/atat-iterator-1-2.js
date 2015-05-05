// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: atat-iterator-1-2.js
---*/

if (!String.prototype[Symbol.iterator]) {
    $ERROR("expected string prototype to have an iterator");
} else if (String.prototype[Symbol.iterator].name !== "[Symbol.iterator]") {
    $ERROR("expected string iterator function to have name [Symbol.iterator], got " +
        String.prototype[Symbol.iterator].name + " instead");
}
