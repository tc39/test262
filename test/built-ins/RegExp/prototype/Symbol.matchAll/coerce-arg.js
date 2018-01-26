// Copyright (C) 2018 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: String coercion of string parameter
info: |
    RegExp.prototype [ @@matchAll ] ( string )

    [...]
    2. Let S be ? ToString(O).
    [...]
features: [Symbol.match, Symbol.matchAll]
---*/

var obj = {
  valueOf: function() {
    $ERROR('This method should not be invoked.');
  },
  toString: function() {
    throw new Test262Error('toString invoked');
  }
};
obj[Symbol.match] = true;

assert.throws(Test262Error, function () {
  /toString value/[Symbol.matchAll](obj);
});
