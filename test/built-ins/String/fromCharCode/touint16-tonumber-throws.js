// Copyright (C) 2026 Hyunjoon Kim. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.fromcharcode
description: >
    String.fromCharCode propagates abrupt completion from ToNumber via ToUint16.
info: |
    String.fromCharCode applies ToUint16 to each argument, and ToUint16 begins
    with ToNumber, so abrupt completion from ToNumber is propagated.

    String.fromCharCode ( ..._codeUnits_ )

    2. For each element _next_ of _codeUnits_, do
      a. Let _nextCU_ be the code unit whose numeric value is ℝ(? ToUint16(_next_)).

    ToUint16 ( _argument_ )

    1. Let _number_ be ? ToNumber(_argument_).
features: [BigInt]
---*/

assert.throws(TypeError, function () {
  String.fromCharCode(0n);
}, "ToNumber throws when argument is BigInt, and String.fromCharCode must propagate it");

assert.throws(Test262Error, function () {
  String.fromCharCode({
    valueOf: function () { throw new Test262Error(); }
  });
}, "ToNumber throws when its argument's ToPrimitive step calls a throwing valueOf, and String.fromCharCode must propagate it.");
