// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.

    Array.of passes the number of arguments to the constructor it calls.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
includes: [compareArray.js]
---*/
var hits = 0;

function Herd(n) {
  assert.sameValue(arguments.length, 1);
  assert.sameValue(n, 5);
  hits++;
}

Herd.of = Array.of;
Herd.of("sheep", "cattle", "elephants", "whales", "seals");
assert.sameValue(hits, 1);
