// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.includes
description: >
  Underlying iterator has throwing next method
features: [iterator-includes]
---*/

var returnMethodCalled = false;

let iterator = {
  __proto__: Iterator.prototype,
  next() {
    throw new Test262Error();
  },
  get return() {
    returnMethodCalled = true;
    throw new TypeError();
  }
};

assert.throws(Test262Error, function() {
  iterator.includes(0);
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method throws");
