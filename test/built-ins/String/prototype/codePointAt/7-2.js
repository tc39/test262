// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: If there is no element at that position, the result is undefined
author: Murat Sutunc
---*/

if ("".codePointAt(1) !== undefined) {
    $ERROR("Expected undefined, got " + "".codePointAt(1) + " instead");
}
