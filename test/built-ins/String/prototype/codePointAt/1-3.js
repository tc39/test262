// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Number should be coercible
author: Murat Sutunc
---*/

Number.prototype.codePointAt = String.prototype.codePointAt;
var x = 1;

if (x.codePointAt(0) !== 49) {
    $ERROR("Expected Number to be coercible, it isn't")
}
