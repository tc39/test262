// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-String.prototypeitem
description: >
  Returns the item value at the specified relative index
info: |
  String.prototypeitem ( )

  Let O be ? ToObject(this value).
  Let len be ? LengthOfStringLike(O).
  Let relativeIndex be ? ToInteger(index).
  If relativeIndex ≥ 0, then
    Let k be relativeIndex.
  Else,
    Let k be len + relativeIndex.
  If k < 0 or k ≥ len, then return undefined.
  Return ? Get(O, ! ToString(k)).

features: [String.prototype.item]
---*/
assert.sameValue(typeof String.prototype.item, 'function');

let s = "12345";

assert.sameValue(s.item(0), "1", 's.item(0) must return "1"');
assert.sameValue(s.item(-1), "5", 's.item(-1) must return "5"');
assert.sameValue(s.item(-3), "3", 's.item(-3) must return "3"');
assert.sameValue(s.item(-4), "2", 's.item(-4) must return "2"');
