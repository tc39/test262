// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.at
description: >
  Returns the item value at the specified index
info: |
  %TypedArray%.prototype.at( index )

  Let O be the this value.
  Perform ? ValidateTypedArray(O).
  Let len be O.[[ArrayLength]].
  Let relativeIndex be ? ToInteger(index).
  If relativeIndex ≥ 0, then
    Let k be relativeIndex.
  Else,
    Let k be len + relativeIndex.
  If k < 0 or k ≥ len, then return undefined.
  Return ? Get(O, ! ToString(k)).

includes: [testTypedArray.js]
features: [TypedArray,TypedArray.prototype.at]
---*/
assert.sameValue(
  typeof TypedArray.prototype.at,
  'function',
  'The value of `typeof TypedArray.prototype.at` is "function"'
);

testWithTypedArrayConstructors(TA => {
  assert.sameValue(typeof TA.prototype.at, 'function', 'The value of `typeof TA.prototype.at` is "function"');

  const {
    nonresizable,
    fixedLength,
    lengthTracking,
    fixedLengthWithOffset,
    lengthTrackingWithOffset
  } = createTypedArrayVariations(TA, [1, 2, 3, 4]);

  [
    nonresizable,
    fixedLength,
    lengthTracking,
  ].forEach((a) => {
    assert.sameValue(a.at(0), 1, 'a.at(0) must return 1')
    assert.sameValue(a.at(1), 2, 'a.at(1) must return 2')
    assert.sameValue(a.at(2), 3, 'a.at(2) must return 3')
    assert.sameValue(a.at(3), 4, 'a.at(3) must return 4')
  });

  [
    fixedLengthWithOffset,
    lengthTrackingWithOffset
  ].forEach((a) => {
    assert.sameValue(a.at(0), 3, 'a.at(2) must return 3')
    assert.sameValue(a.at(1), 4, 'a.at(3) must return 4')
  })

});



testWithTypedArrayVariants(TA => {
  assert.sameValue(typeof TA.prototype.at, 'function', 'The value of `typeof TA.prototype.at` is "function"');

  const values = [1, 2, 3, 4];

  /*
    Works for non-offset ...
  */

  testWithTypedArrayVariants(TA, values, (case) => {
    /*
      I updated this to refer to the values array instead of the
      explicit value because really they should have both been
      written this way — it makes the connection clear.
    */
    assert.sameValue(a.at(0), values[0], 'a.at(0) must return 1');
    assert.sameValue(a.at(1), values[1], 'a.at(1) must return 2');
    assert.sameValue(a.at(2), values[2], 'a.at(2) must return 3');
    assert.sameValue(a.at(3), values[3], 'a.at(3) must return 4');
  });

  /*
    ... and then what  do we do for the offsets?
  */

});
