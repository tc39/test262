// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  %AsyncFunction% is a subclass of Function
---*/
async function foo() { };
var AsyncFunction = foo.constructor;
assert.sameValue(Object.getPrototypeOf(AsyncFunction), Function, "Prototype of constructor");
assert.sameValue(Object.getPrototypeOf(AsyncFunction.prototype), Function.prototype, "Prototype of constructor's prototype");
assert(foo instanceof Function, 'async function instance is instanceof Function');

