// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.at
description: >
  Property type and descriptor.
info: |
  %TypedArray%.prototype.at( index )

  Let relativeIndex be ? ToInteger(index).

includes: [testTypedArray.js]
features: [TypedArray, TypedArray.prototype.at]
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
  } = createTypedArrayVariations(TA, [0, 1, 2, 3]);

  [
    nonresizable,
    fixedLength,
    lengthTracking,
    fixedLengthWithOffset,
    lengthTrackingWithOffset
  ].forEach(({ name, contents }) => {
    assert.sameValue(contents.at(false), 0, `contents.at(false) must return 0 in ${name}`);
    assert.sameValue(contents.at(null), 0, `contents.at(null) must return 0 in ${name}`);
    assert.sameValue(contents.at(undefined), 0, `contents.at(undefined) must return 0 in ${name}`);
    assert.sameValue(contents.at(""), 0, `contents.at("") must return 0 in ${name}`);
    assert.sameValue(contents.at(function() {}), 0, `contents.at(function() {}) must return 0 in ${name}`);
    assert.sameValue(contents.at([]), 0, `contents.at([]) must return 0 in ${name}`);

    assert.sameValue(contents.at(true), 1, `contents.at(true) must return 1 in ${name}`);
    assert.sameValue(contents.at("1"), 1, `contents.at("1") must return 1 in ${name}`);
  });


});
