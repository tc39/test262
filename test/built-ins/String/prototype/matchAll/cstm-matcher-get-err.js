// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Behavior when error is thrown accessing @@matchAll property
info: |
    [...]
    4. Let matcher be ? GetMethod(R, @@matchAll).
    5. If matcher is not undefined, then
      a. Return ? Call(matcher, R, « O »).
features: [Symbol.match, Symbol.matchAll]
---*/

var obj = {};
Object.defineProperty(obj, Symbol.match, {
  value: true // to make IsRegExp pass
});
Object.defineProperty(obj, Symbol.matchAll, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  ''.matchAll(obj);
});
