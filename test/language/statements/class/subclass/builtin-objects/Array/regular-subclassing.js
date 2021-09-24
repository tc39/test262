// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.1
description: Subclassing Array
info: |
  22.1.1 The Array Constructor

  The Array constructor is designed to be subclassable. It may be used as the
  value of an extends clause of a class definition. (...)
includes: [compareArray.js]
---*/

class Sub extends Array {}

var a1 = new Sub(42, 'foo');

assert.sameValue(a1.length, 2, 'The value of a1.length is expected to be 2');
assert.sameValue(a1[0], 42, 'The value of a1[0] is expected to be 42');
assert.sameValue(a1[1], 'foo', 'The value of a1[1] is expected to be "foo"');

a1.push(true);
assert.sameValue(a1.length, 3, 'The value of a1.length is expected to be 3');
assert.sameValue(a1[0], 42, 'The value of a1[0] is expected to be 42');
assert.sameValue(a1[1], 'foo', 'The value of a1[1] is expected to be "foo"');
assert.sameValue(a1[2], true, 'The value of a1[2] is expected to be true');

var a2 = new Sub(7);
assert.sameValue(a2.length, 7, 'The value of a2.length is expected to be 7');

var a3 = new Sub();
assert.compareArray(a3, [], 'The value of a3 is expected to be []');
assert.sameValue(a3.length, 0, 'The value of a3.length is expected to be 0');
