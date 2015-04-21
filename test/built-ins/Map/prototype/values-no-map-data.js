// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      If the context does not have a [[MapData]] internal slot, throw a
      TypeError exception as per 23.1.5.1.
  es6id: 23.1.3.4
 ---*/

assert.throws(TypeError, function() {
  Map.prototype.values.call({});
});
