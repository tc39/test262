// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.at
description: >
  Returns undefined if the specified index less than or greater than the available index range.
info: |
  %TypedArray%.prototype.at( index )

  If k < 0 or k ≥ len, then return undefined.

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
    fixedLengthWithOffset,
    lengthTrackingWithOffset
  ].forEach(({ contents, name }) => {
    assert.sameValue(contents.at(-5), undefined, `contents.at(-5) must return undefined in ${name}`); // go past the start
    assert.sameValue(contents.at(4), undefined, `contents.at(4) must return undefined in ${name}`);
  });
});
