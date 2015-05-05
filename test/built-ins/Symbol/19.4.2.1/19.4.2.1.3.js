// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.for(key) always returns the same symbol primitive when key string values are strictly equal
---*/

var key = 'key';
var sym1 = Symbol.for(key);
var sym2 = Symbol.for(key);

if (sym1 !== sym2) {
    $ERROR("sym1 !== sym2");
}
