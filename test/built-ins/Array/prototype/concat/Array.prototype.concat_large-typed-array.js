// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/*---
esid: sec-array.prototype.concat
description: Array.prototype.concat large typed array
includes: [compareArray.js]
features: [Symbol.isConcatSpreadable]
---*/
function concatTypedArray(type, elems, modulo) {
  var items = new Array(elems);
  var ta_by_len = new type(elems);
  for (var i = 0; i < elems; ++i) {
    ta_by_len[i] = items[i] = modulo === false ? i : elems % modulo;
  }
  var ta = new type(items);
  assert.compareArray([].concat(ta, ta), [ta, ta],
    '[].concat(new type(items), new type(items)) must return [ta, ta]'
  );
  ta[Symbol.isConcatSpreadable] = true;
  assert.compareArray([].concat(ta), items, '[].concat(new type(items)) returns items');

  assert.compareArray([].concat(ta_by_len, ta_by_len), [ta_by_len, ta_by_len],
    '[].concat(new type(elems), new type(elems)) must return [ta_by_len, ta_by_len]'
  );
  ta_by_len[Symbol.isConcatSpreadable] = true;
  assert.compareArray([].concat(ta_by_len), items,
    '[].concat(new type(elems)) returns items'
  );

  // TypedArray with fake `length`.
  ta = new type(1);
  var defValue = ta[0];
  var expected = new Array(4000);
  expected[0] = defValue;

  Object.defineProperty(ta, "length", {
    value: 4000
  });
  ta[Symbol.isConcatSpreadable] = true;
  assert.compareArray([].concat(ta), expected, '[].concat(new type(1)) returns expected');
}

var max = [Math.pow(2, 8), Math.pow(2, 16), Math.pow(2, 32), false, false];
[
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array
].forEach(function(ctor, i) {
  concatTypedArray(ctor, 4000, max[i]);
});
