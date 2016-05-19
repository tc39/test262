// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: TODO
es6id: TODO
description: TODO
info: |
  TODO
---*/

var other = $.createRealm().global;
var otherEval = other.eval;

otherEval("var x = 23;");
assert.sameValue(typeof x, 'undefined');
assert.sameValue(other.x, 23);
