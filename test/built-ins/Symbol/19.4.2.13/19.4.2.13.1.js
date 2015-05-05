// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.toStringTag is the well known symbol @@toStringTag
---*/

if (typeof Symbol.toStringTag !== 'symbol') {
    $ERROR("typeof Symbol.toStringTag !== 'symbol'");
}
