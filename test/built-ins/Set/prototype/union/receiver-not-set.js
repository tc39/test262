// Copyright (C) 2023 Kevin Gibbons, Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union throws when receiver is not a Set
features: [Set-methods]
---*/

class MySetLike {
  size = 2;
  has = () => {};
  keys = function* keys() {
    yield 2;
    yield 3;
  };
}

assert.throws(
  TypeError,
  () => {
    Set.prototype.union.call(new MySetLike(), new Set());
  },
  "Set-like class"
);

assert.throws(
  TypeError,
  () => {
    Set.prototype.union.call(
      {
        size: 2,
        has: () => {},
        keys: function* keys() {
          yield 2;
          yield 3;
        },
      },
      new Set()
    );
  },
  "Set-like object"
);
