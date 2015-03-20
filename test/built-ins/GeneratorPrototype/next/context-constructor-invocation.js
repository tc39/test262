// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.2
description: >
    If the generator was invoked using [[Construct]], the this bind is not
    initialized and any references to `this` within the FunctionBody will
    produce a ReferenceError exception.
---*/

function* g() { this; }
var iter = new g();

assert.throws(ReferenceError, function() {
  iter.next();
});
