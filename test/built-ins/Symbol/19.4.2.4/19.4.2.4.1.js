// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.iterator is the well known symbol @@iterator
---*/

if (typeof Symbol.iterator !== 'symbol') {
    $ERROR("typeof Symbol.iterator !== 'symbol'");
}
