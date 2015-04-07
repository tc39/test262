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


assert.sameValue(1, Array.prototype.find.length);

var a = [21, 22, 23, 24];
assert.sameValue(a.find(function() { return false; }), undefined);
assert.sameValue(a.find(function() { return true; }), 21);
assert.sameValue(a.find(function(val) { return 121 === val; }), undefined);
assert.sameValue(a.find(function(val) { return 24 === val; }), 24);
assert.sameValue(a.find(function(val) { return 23 === val; }), 23);
assert.sameValue(a.find(function(val) { return 22 === val; }), 22);
