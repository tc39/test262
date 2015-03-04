// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    The findIndex() method returns an index in the array, if an element
    in the array satisfies the provided testing function. Otherwise -1 is returned.

    Test Array.prototype.findIndex works with String

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
---*/
var a = "abcd";
var l = -1;
var o = -1;
var v = -1;
var k = -1;

var index = Array.prototype.findIndex.call(a, function(val, key, obj) {
  o = obj.toString();
  l = obj.length;
  v = val;
  k = key;

  return false;
});

assert.sameValue(o, a);
assert.sameValue(l, a.length);
assert.sameValue(v, "d");
assert.sameValue(k, 3);
assert.sameValue(index, -1);

index = Array.prototype.findIndex.apply(a, [function(val, key, obj) {
  o = obj.toString();
  l = obj.length;
  v = val;
  k = key;

  return true;
}]);

assert.sameValue(o, a);
assert.sameValue(l, a.length);
assert.sameValue(v, "a");
assert.sameValue(k, 0);
assert.sameValue(index, 0);

