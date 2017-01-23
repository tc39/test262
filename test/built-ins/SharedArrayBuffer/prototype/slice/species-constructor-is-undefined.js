// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Uses default constructor is `constructor` property is undefined.
info: >
  SharedArrayBuffer.prototype.slice ( start, end )
---*/

var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = undefined;

var result = arrayBuffer.slice();
assert.sameValue(Object.getPrototypeOf(result), SharedArrayBuffer.prototype);
