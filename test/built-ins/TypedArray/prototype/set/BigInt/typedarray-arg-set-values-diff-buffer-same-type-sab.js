// Copyright (C) 2016 the V8 project authors. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.set-typedarray-offset
description: >
  Set values from different instances using the different buffer and same
  constructor. srcBuffer values are cached.
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, SharedArrayBuffer, TypedArray]
---*/
testWithBigIntTypedArrayConstructors(function(TA) {
  var sample, result;
  var sab = new SharedArrayBuffer(2 * TA.BYTES_PER_ELEMENT);
  var src = new TA(sab);
  src[0] = 42n;
  src[1] = 43n;
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 1);
  assert.compareArray(sample, [1n, 42n, 43n, 4n], 'The value of sample is expected to be [1n, 42n, 43n, 4n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 0);
  assert.compareArray(sample, [42n, 43n, 3n, 4n], 'The value of sample is expected to be [42n, 43n, 3n, 4n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  sample = new TA([1n, 2n, 3n, 4n]);
  result = sample.set(src, 2);
  assert.compareArray(sample, [1n, 2n, 42n, 43n], 'The value of sample is expected to be [1n, 2n, 42n, 43n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  src = new TA([42n, 43n]);
  sab = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
  sample = new TA(sab);
  sample[0] = 1n;
  sample[1] = 2n;
  sample[2] = 3n;
  sample[3] = 4n;
  result = sample.set(src, 1);
  assert.compareArray(sample, [1n, 42n, 43n, 4n], 'The value of sample is expected to be [1n, 42n, 43n, 4n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  sab = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
  sample = new TA(sab);
  sample[0] = 1n;
  sample[1] = 2n;
  sample[2] = 3n;
  sample[3] = 4n;
  result = sample.set(src, 0);
  assert.compareArray(sample, [42n, 43n, 3n, 4n], 'The value of sample is expected to be [42n, 43n, 3n, 4n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  sab = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
  sample = new TA(sab);
  sample[0] = 1n;
  sample[1] = 2n;
  sample[2] = 3n;
  sample[3] = 4n;
  result = sample.set(src, 2);
  assert.compareArray(sample, [1n, 2n, 42n, 43n], 'The value of sample is expected to be [1n, 2n, 42n, 43n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  var sab1 = new SharedArrayBuffer(2 * TA.BYTES_PER_ELEMENT);
  src = new TA(sab1);
  src[0] = 42n;
  src[1] = 43n;
  var sab2;
  sab2 = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
  sample = new TA(sab2);
  sample[0] = 1n;
  sample[1] = 2n;
  sample[2] = 3n;
  sample[3] = 4n;
  result = sample.set(src, 1);
  assert.compareArray(sample, [1n, 42n, 43n, 4n], 'The value of sample is expected to be [1n, 42n, 43n, 4n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  sab2 = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
  sample = new TA(sab2);
  sample[0] = 1n;
  sample[1] = 2n;
  sample[2] = 3n;
  sample[3] = 4n;
  result = sample.set(src, 0);
  assert.compareArray(sample, [42n, 43n, 3n, 4n], 'The value of sample is expected to be [42n, 43n, 3n, 4n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
  sab2 = new SharedArrayBuffer(4 * TA.BYTES_PER_ELEMENT);
  sample = new TA(sab2);
  sample[0] = 1n;
  sample[1] = 2n;
  sample[2] = 3n;
  sample[3] = 4n;
  result = sample.set(src, 2);
  assert.compareArray(sample, [1n, 2n, 42n, 43n], 'The value of sample is expected to be [1n, 2n, 42n, 43n]');
  assert.sameValue(result, undefined, 'The value of result is expected to equal undefined');
});
