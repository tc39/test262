// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: mapFn throws an exception
esid: sec-array.from
---*/

var array = [2, 4, 8, 16, 32, 64, 128];

function mapFn(value, index, obj) {
  throw new Test262Error();
}

assert.throws(Test262Error, function() {
  Array.from(array, mapFn);
});
