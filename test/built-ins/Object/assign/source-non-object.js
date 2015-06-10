// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.1.2.1
description: Object.assign called a value that cannot be converted to an object
info: >
    [...]
    5. For each element nextSource of sources, in ascending index order,
       a. If nextSource is undefined or null, let keys be an empty List.
---*/

var target = {};
var result;

result = Object.assign(target, null);

assert.sameValue(result, target);

result = Object.assign(target, undefined);

assert.sameValue(result, target);
