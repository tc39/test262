// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.matchall
description: >
  Throws error when getting *"flags"* property.
info: |
  String.prototype.matchAll ( _regexpOrPattern_ )

  [...]
  3. If _regexpOrPattern_ is an Object, then
    a. Let _isRegexp_ be ? IsRegExp(_regexpOrPattern_).
    b. If _isRegexp_ is *true*, then
      i. Let _flags_ be ? Get(_regexpOrPattern_, *"flags"*).
  [...]
features: [Symbol.match]
---*/

var regexp = {
  [Symbol.match]: true,
  get flags() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  ''.matchAll(regexp);
});
