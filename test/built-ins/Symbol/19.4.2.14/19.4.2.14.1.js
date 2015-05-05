// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.unscopables is the well known symbol @@unscopables
---*/

if (typeof Symbol.unscopables !== 'symbol') {
    $ERROR("typeof Symbol.unscopables !== 'symbol'");
}
