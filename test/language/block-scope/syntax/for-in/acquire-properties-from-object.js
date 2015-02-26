// Copyright (C) Copyright 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    for-in to acquire properties from object
includes: [compareArray.js]
---*/
function props(x) {
  var array = [];
  for (let p in x) array.push(p);
  return array.sort();
}

assert.sameValue(props({}).length, 0);
assert.sameValue(props({x:1}).length, 1);
assert.sameValue(props({x:1, y:2}).length, 2);

assert(compareArray(props({x:1}), ["x"]));
assert(compareArray(props({x:1, y:2}), ["x", "y"]));
assert(compareArray(props({x:1, y:2, zoom:3}), ["x", "y", "zoom"]));
