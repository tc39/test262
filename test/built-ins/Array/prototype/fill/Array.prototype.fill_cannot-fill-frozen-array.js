// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.6
description: >
    The fill() method fills all the elements of an array from a start
    index to an end index with a static value.

    Cannot fill a frozen array

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
---*/
assert.throws(TypeError, function() {
  Object.freeze([0]).fill();
});
