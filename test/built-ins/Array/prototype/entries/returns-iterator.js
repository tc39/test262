// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The method should return an Iterator instance.
  es6id: 22.1.3.4
 ---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
var iter = [].entries();

assert.sameValue(Object.getPrototypeOf(iter), ArrayIteratorProto);
