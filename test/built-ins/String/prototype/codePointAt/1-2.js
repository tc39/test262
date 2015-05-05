// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Boolean should be coercible
author: Murat Sutunc
---*/

Boolean.prototype.codePointAt = String.prototype.codePointAt;
var x = true;

if (x.codePointAt(0) !== 116) {
    $ERROR("Expected Boolean to be coercible, it isn't")
}
