// Copyright (C) 2018 Peter Wong. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: IsRegExp should only be called once
info: |
  RegExp.prototype [ @@matchAll ] ( string )
    1. Let R be the this value.
    [...]
    4. Let C be ? SpeciesConstructor(R, %RegExp%).
    5. Let flags be ? ToString(? Get(R, "flags")).
    6. Let matcher be ? Construct(C, « R, flags »).

  21.2.3.1 RegExp ( pattern, flags )
    1. Let patternIsRegExp be ? IsRegExp(pattern).
    [...]
features: [Symbol.match, Symbol.matchAll]
---*/

var internalCount = 0;
Object.defineProperty(RegExp.prototype, Symbol.match, {
  get: function() {
    ++internalCount;
    return true;
  }
});

var count = 0;
var o = {
  get [Symbol.match]() {
    ++count;
    return false;
  },
  flags: "",
};

RegExp.prototype[Symbol.matchAll].call(o, '1');

assert.sameValue(0, internalCount);
assert.sameValue(1, count);
