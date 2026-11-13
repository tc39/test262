// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function.prototype.bind
description: >
  Error thrown when accessing target's `length` property.
info: |
  Function.prototype.bind ( _thisArg_, ..._args_ )

  1. Let _target_ be the *this* value.
  2. If IsCallable(_target_) is *false*, throw a *TypeError* exception.
  [...]
  5. Let _targetHasLength_ be ? HasOwnProperty(_target_, *"length"*).
  6. If _targetHasLength_ is *true*, then
    a. Let _targetLength_ be ? Get(_target_, *"length"*).
    [...]
---*/

function fn() {}

Object.defineProperty(fn, "length", {
  get() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  fn.bind();
});
