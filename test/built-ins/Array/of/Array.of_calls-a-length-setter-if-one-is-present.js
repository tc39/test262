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
var hits = 0;
var lastObj = null, lastVal = undefined;
function setter(v) {
  hits++;
  lastObj = this;
  lastVal = v;
}

// when the setter is on the new object
function Pack() {
  Object.defineProperty(this, "length", {set: setter});
}
Pack.of = Array.of;
var pack = Pack.of("wolves", "cards", "cigarettes", "lies");
assert(compareArray(lastObj, pack));
assert.sameValue(lastVal, 4);

// when the setter is on the new object's prototype
function Bevy() {}
Object.defineProperty(Bevy.prototype, "length", {set: setter});
Bevy.of = Array.of;
var bevy = Bevy.of("quail");
assert(compareArray(lastObj, bevy));
assert.sameValue(lastVal, 1);
