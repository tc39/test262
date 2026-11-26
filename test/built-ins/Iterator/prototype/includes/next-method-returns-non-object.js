// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.includes
description: >
  Underlying iterator next returns non-object
features: [iterator-includes]
---*/

var returnMethodCalled = false;

let iterator = {
  __proto__: Iterator.prototype,
  next() {
    return null;
  },
  get return() {
    returnMethodCalled = true;
    throw new Test262Error();
  }
};

assert.throws(TypeError, function() {
  iterator.includes(0);
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns a non-object");
