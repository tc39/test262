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
---*/

var a = [1, 2, 3, 4, 5];
var l = 0;
var found = a.find(function() {
  l++;
  return false;
});

assert.sameValue(l, a.length);
assert.sameValue(found, undefined);
