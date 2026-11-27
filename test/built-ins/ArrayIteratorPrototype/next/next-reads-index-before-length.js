// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%arrayiteratorprototype%.next
description: >
  %ArrayIteratorPrototype%.next reads [[ArrayLikeNextIndex]] before it gets
  the length
info: |
  %ArrayIteratorPrototype%.next ( )

  ...
  6. Let index be iteratorObj.[[ArrayLikeNextIndex]].
  ...
  9. Else,
    a. Let length be ? LengthOfArrayLike(array).
  10. If index ≥ length, then
    ...
  11. Set iteratorObj.[[ArrayLikeNextIndex]] to index + 1.
  ...
  13. If kind is key, then
    a. Let result be indexNumber.
  ...
---*/
var iterator;
var nested = false;
var nestedKey;

var arrayLike = {
  get length() {
    if (!nested) {
      nested = true;
      nestedKey = iterator.next().value;
    }
    return 2;
  }
};

iterator = Array.prototype.keys.call(arrayLike);

var outerKey = iterator.next().value;
assert.sameValue(nestedKey, 0, "the nested call reads index 0");
assert.sameValue(outerKey, 0, "the outer call uses the index it read before getting the length");
