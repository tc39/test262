// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: sec-iteratorclose
description: >
    If <iterator>.return is an object emulating `undefined` (e.g. `document.all`
    in browsers), it shouldn't be treated as if it were actually `undefined`.
features: [generators, uncallableAndIsHTMLDDA]
---*/

var iter = {
  [Symbol.iterator]() { return this; },
  next() { return {}; },
  return: $262.uncallableAndIsHTMLDDA(),
};

assert.throws(TypeError, function() {
  // This code is expected to throw a TypeError because `iter.return` throws a
  // TypeError when invoked with `iter` as `this` and no arguments provided.
  // It's irrelevant that in hosts that support the [[IsHTMLDDA]] internal slot,
  // this object has that slot: `<iterator>.return` behavior is skipped only if
  // that property is exactly the value `undefined`, not a value loosely equal
  // to it.
  for (var x of iter)
    break;
});
