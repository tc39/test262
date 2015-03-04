// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.

    Array.of makes real arrays.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
---*/

function check(a) {
  assert.sameValue(Object.getPrototypeOf(a), Array.prototype);
  assert.sameValue(Array.isArray(a), true);
  a[9] = 9;
  assert.sameValue(a.length, 10);
}

check(Array.of());
check(Array.of(0));
check(Array.of(0, 1, 2));
var f = Array.of;
check(f());

