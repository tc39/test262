// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
    The find() method returns a value in the array, if an
    element in the array satisfies the provided testing function.
    Otherwise undefined is returned.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
includes: [compareArray.js]
---*/

var a = ["b"];
var l = -1;
var o = -1;
var v = -1;
var k = -1;

var found = a.find(function(val, key, obj) {
  o = obj;
  l = obj.length;
  v = val;
  k = key;

  return false;
});

assert(compareArray(o, a));
assert.sameValue(a.length, l);
assert.sameValue(v, "b");
assert.sameValue(k, 0);
assert.sameValue(found, undefined);
