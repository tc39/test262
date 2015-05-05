// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype is an ordinary object and not a symbol
---*/

if (typeof Symbol.prototype === 'symbol' || typeof Symbol.prototype !== 'object') {
    $ERROR("typeof Symbol.prototype === 'symbol' || typeof Symbol.prototype !== 'object'");
}
