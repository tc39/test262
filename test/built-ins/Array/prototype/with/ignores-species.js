// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.with
description: >
  Array.prototype.with ignores @@species
info: |
  Array.prototype.with ( )

  ...
  8. Let A be ? ArrayCreate(𝔽(len)).
  ...
features: [change-array-by-copy]
---*/

var a = [];
a.constructor = {};
a.constructor[Symbol.species] = function () {}

assert.sameValue(Object.getPrototypeOf(a.with(0, 0)), Array.prototype);

var b = [];
Object.defineProperty(b, "constructor", {
  get() {
    throw new Test262Error("Should not get .constructor");
  }
});

b.with(0, 0);
