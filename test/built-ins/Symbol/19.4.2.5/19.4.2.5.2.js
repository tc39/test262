// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.keyFor(sym) returns undefined if sym was not registered via call to Symbol.key
---*/

var sym = Symbol();
var key = Symbol.keyFor(sym);

if (key !== undefined) {
    $ERROR("key !== undefined");
}
