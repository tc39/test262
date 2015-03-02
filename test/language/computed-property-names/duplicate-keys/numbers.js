// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property names can be numbers
---*/
var object = {
  [1.2]: 'A',
  [1e55]: 'B',
  [0.000001]: 'C',
  [-0]: 'D',
  [Infinity]: 'E',
  [-Infinity]: 'F',
  [NaN]: 'G',
};
assert.sameValue(object['1.2'], 'A');
assert.sameValue(object['1e+55'], 'B');
assert.sameValue(object['0.000001'], 'C');
assert.sameValue(object[0], 'D');
assert.sameValue(object[Infinity], 'E');
assert.sameValue(object[-Infinity], 'F');
assert.sameValue(object[NaN], 'G');
