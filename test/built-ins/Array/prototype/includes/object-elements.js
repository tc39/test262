// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes works on objects
author: Domenic Denicola
---*/

assert.sameValue(['a', 'b', 'c'].includes({}), false, 'Did not expect the object to be found');
assert.sameValue([{}, {}].includes({}), false, 'Did not expect the object to be found');

var obj = {};

assert.sameValue([obj].includes(obj), true, 'Expected the object to be found');
assert.sameValue([obj].includes(obj, 1), false, 'Did not expect the object to be found');
assert.sameValue([obj, obj].includes(obj, 1), true, 'Expected the object to be found');

var stringyObject = { toString: function () { return 'a'; } };
assert.sameValue(['a', 'b', obj].includes(stringyObject), false, 'Did not expect the object to be found');
