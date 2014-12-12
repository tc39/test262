// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes works on array-like objects
author: Domenic Denicola
---*/

var arrayLike1 = { length: 5, 0: "a", 1: "b" };

assert.sameValue(Array.prototype.includes.call(arrayLike1, "a"), true, 'Expected array-like to contain "a"');
assert.sameValue(Array.prototype.includes.call(arrayLike1, "c"), false, 'Expected array-like not to contain "c"');

var arrayLike2 = { length: 2, 0: "a", 1: "b", 2: "c" };

assert.sameValue(Array.prototype.includes.call(arrayLike2, "b"), true, 'Expected array-like to contain "b"');
assert.sameValue(Array.prototype.includes.call(arrayLike2, "c"), false, 'Expected array-like to not contain "c"');
