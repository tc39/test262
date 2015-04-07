// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    The findIndex() method returns an index in the array, if an element
    in the array satisfies the provided testing function. Otherwise -1 is returned.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
includes: [compareArray.js]
---*/
//
// Test array modifications
//
var a = [1, 2, 3];
a.findIndex(function(val) { a.push(val); return false; });
assert(compareArray(a, [1, 2, 3, 1, 2, 3]));
assert.sameValue(a.length, 6);

a = [1, 2, 3];
a.findIndex(function(val, key) { a[key] = ++val; return false; });
assert(compareArray(a, [2, 3, 4]));
assert.sameValue(a.length, 3);
