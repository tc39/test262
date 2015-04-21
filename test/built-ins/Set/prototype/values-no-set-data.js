// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      If the context does not have a [[SetData]] internal slot, throw a
      TypeError exception as per 23.2.5.1.
  es6id: 23.2.3.10
 ---*/

assert.throws(TypeError, function() {
  Set.prototype.values.call({});
});
