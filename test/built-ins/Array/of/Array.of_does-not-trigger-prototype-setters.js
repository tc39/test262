// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.

    Array.of does not trigger prototype setters.
    (It defines elements rather than assigning to them.)

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
includes: [compareArray.js]
---*/




function Bag() {}
Bag.of = Array.of;

var status = "pass";
Object.defineProperty(Array.prototype, "0", {set: function(v) {status = "FAIL 1"}});
assert.sameValue(Array.of(1)[0], 1);
assert.sameValue(status, "pass");

Object.defineProperty(Bag.prototype, "0", {set: function(v) {status = "FAIL 2"}});
assert.sameValue(Bag.of(1)[0], 1);
assert.sameValue(status, "pass");

