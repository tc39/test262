// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
includes: [compareArray.js]
---*/
var a = Array.of();
var elem = [];
assert.sameValue(a.length, 0);
a = Array.of(undefined, null, 3.14, elem);

assert(compareArray(a, [undefined, null, 3.14, elem]));
a = [];
for (var i = 0; i < 1000; i++) {
  a[i] = i;
}
assert(compareArray(Array.of.apply(null, a), a));
