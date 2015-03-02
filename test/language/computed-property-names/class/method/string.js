// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property class method names can be a string
includes: [compareArray.js]
---*/

function ID(x) {
  return x;
}

class C {
  a() { return 'A'}
  ['b']() { return 'B'; }
  c() { return 'C'; }
  [ID('d')]() { return 'D'; }
}
assert.sameValue(new C().a(), 'A');
assert.sameValue(new C().b(), 'B');
assert.sameValue(new C().c(), 'C');
assert.sameValue(new C().d(), 'D');
assert(compareArray(Object.keys(C.prototype), []));
assert(compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'b', 'c', 'd']));
