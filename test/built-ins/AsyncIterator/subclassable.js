// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciterator-constructor
description: >
  The AsyncIterator constructor is designed to be subclassable.
info: |
  The AsyncIterator constructor

  - is designed to be subclassable. It may be used as the value of an extends clause of a class defintion.

features: [iterator-helpers]
---*/

class SubAsyncIterator extends AsyncIterator {}

assert.sameValue(
  new SubAsyncIterator() instanceof SubAsyncIterator,
  true,
  'The result of `(new SubAsyncIterator() instanceof SubAsyncIterator)` is true'
);
assert.sameValue(
  new SubAsyncIterator() instanceof AsyncIterator,
  true,
  'The result of `(new SubAsyncIterator() instanceof AsyncIterator)` is true'
);
