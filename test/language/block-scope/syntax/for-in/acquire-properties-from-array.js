// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    for-in to acquire properties from array
includes: [compareArray.js]
---*/
function props(x) {
  var array = [];
  for (let p in x) array.push(p);
  return array.sort();
}

assert.sameValue(props([]).length, 0);
assert.sameValue(props([1]).length, 1);
assert.sameValue(props([1,2]).length, 2);

assert(compareArray(props([1]), ["0"]));
assert(compareArray(props([1,2]), ["0", "1"]));
assert(compareArray(props([1,2,3]), ["0", "1", "2"]));
