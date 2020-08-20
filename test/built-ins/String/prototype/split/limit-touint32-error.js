// Copyright (C) 2020 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-string.prototype.split
description: Abrupt completion from ToUint32 on the limit
info: |
  1. If _limit_ is *undefined*, let _lim_ be 2<sup>32</sup> - 1; else let _lim_ be ? ToUint32(_limit_).
  1. Let _R_ be ? ToString(_separator_).
  1. If _lim_ = 0, return _A_.
---*/

var nonStringableSeparator = {};
nonStringableSeparator[Symbol.toPrimitive] = $DONOTEVALUATE;
nonStringableSeparator.toString = $DONOTEVALUATE;
nonStringableSeparator.valueOf = $DONOTEVALUATE;

var nonNumberableLimit = {};
nonStringableSeparator[Symbol.toPrimitive] = function() { throw new Test262Error(); };

assert.throws(Test262Error, function() {
  "foo".split(nonStringableSeparator, nonNumberableLimit);
}, 'ToUint32 should be called on the limit before ToString on the separator.');
