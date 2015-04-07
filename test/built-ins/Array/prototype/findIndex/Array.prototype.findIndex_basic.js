// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.9
description: >
    The findIndex() method returns an index in the array, if an element
    in the array satisfies the provided testing function. Otherwise -1 is returned.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
---*/
var a = [21, 22, 23, 24];
assert.sameValue(a.findIndex(function() { return false; }), -1);
assert.sameValue(a.findIndex(function(val) { return 121 === val; }), -1);
assert.sameValue(a.findIndex(function() { return true; }), 0);
assert.sameValue(a.findIndex(function(val) { return 22 === val; }), 1);
assert.sameValue(a.findIndex(function(val) { return 23 === val; }), 2);
assert.sameValue(a.findIndex(function(val) { return 24 === val; }), 3);
