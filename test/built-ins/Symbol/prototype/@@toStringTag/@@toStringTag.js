// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3.2
description: >
    toStringTag return value
---*/
assert.sameValue(
    Object.prototype.toString.call(Symbol('66')),
    '[object Symbol]',
    "`Object.prototype.toString.call(Symbol('66'))` returns `'[object Symbol]'`"
);
