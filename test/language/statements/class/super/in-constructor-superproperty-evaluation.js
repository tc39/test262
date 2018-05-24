// Copyright (C) 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-makesuperpropertyreference
description: >
  SuperProperty evaluation order: super() thisBinding initialization occurs first.
---*/
class Derived extends Object {
  constructor() {
    super[super()];
  }
}

var derived = new Derived();
assert.sameValue(derived instanceof Derived, true);
assert.sameValue(derived instanceof Object, true);
