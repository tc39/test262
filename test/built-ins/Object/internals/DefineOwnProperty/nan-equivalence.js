// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ordinary-object-internal-methods-and-internal-slots-defineownproperty-p-desc
es6id: 9.1.6
description: >
  Compares "value" field using SameValue algorithm (thereby ignoring distinct
  NaN values)
info: |
  1. Return ? OrdinaryDefineOwnProperty(O, P, Desc).

  9.1.6.1 OrdinaryDefineOwnProperty

  1. Let current be ? O.[[GetOwnProperty]](P).
  2. Let extensible be the value of the [[Extensible]] internal slot of O.
  3. Return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc,
     current).

  9.1.6.3 ValidateAndApplyPropertyDescriptor

  [...]
  4. Return true, if every field in Desc also occurs in current and the value
     of every field in Desc is the same value as the corresponding field in
     current when compared using the SameValue algorithm.
features: [Float64Array, Uint8Array]
includes: [nans.js]
---*/

var float = new Float64Array(1);
var ints = new Uint8Array(float.buffer);
var length = distinctNaNs.length;
var idx, jdx, subject, first, second;
function byteValue(value) {
  float[0] = value;
  return ints[0] + (ints[1] << 8) + (ints[2] << 16) + (ints[3] << 32) +
    (ints[4] << 64) + (ints[5] << 64) + (ints[6] << 128) + (ints[7] << 256);
}

/**
 * Iterate over each pair of distinct NaN values (with replacement). If two or
 * more suitable NaN values cannot be identified, the semantics under test
 * cannot be verfied and this test is expected to pass without evaluating any
 * assertions.
 */
for (idx = 0; idx < length; ++idx) {
  for (jdx = 0 ; jdx < length; ++jdx) {
    first = distinctNaNs[idx];
    second = distinctNaNs[jdx];
    if (byteValue(first) === byteValue(second)) {
      continue;
    }

    subject = {};
    subject.prop = first;
    subject.prop = second;

    assert.notSameValue(
      byteValue(subject.prop),
      byteValue(second),
      'Property value was not re-set'
    );
  }
}
