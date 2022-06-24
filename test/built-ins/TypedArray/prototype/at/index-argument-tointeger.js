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
  ].forEach(({ name, contents }) => {

    let valueOfCallCount = 0;
    let index = {
      valueOf() {
        valueOfCallCount++;
        return 1;
      }
    };

    assert.sameValue(contents.at(index), 1, `contents.at({valueOf() {valueOfCallCount++; return 1;}}) must return 1 in ${name}`);
    assert.sameValue(valueOfCallCount, 1, `The value of 'alueOfCallCount' is 1 in ${name}`);
  });

  [
    fixedLengthWithOffset,
    lengthTrackingWithOffset
  ].forEach(({ name, contents }) => {

    let valueOfCallCount = 0;
    let index = {
      valueOf() {
        valueOfCallCount++;
        return 1;
      }
    };

    assert.sameValue(contents.at(index), 3, `contents.at({valueOf() {valueOfCallCount++; return 1;}}) must return 1 in ${name}`);
    assert.sameValue(valueOfCallCount, 1, `The value of 'valueOfCallCount' is 1 in ${name}`);
  });
});
