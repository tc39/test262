// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Check boolean false
author: Murat Sutunc
---*/

Boolean.prototype.codePointAt = String.prototype.codePointAt;
var x = false;

if (x.codePointAt(0) !== 102) {
    $ERROR("Expected Boolean to be coercible, it isn't")
}
