// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-createresolvingfunctions
description: >
  resolve is anonymous built-in function with length of 1.
info: |
  CreateResolvingFunctions ( promise )

  ...
  3. Let resolve be ! CreateBuiltinFunction(stepsResolve, « [[Promise]], [[AlreadyResolved]] »).
features: [Reflect.construct]
includes: [isConstructor.js]
flags: [async]
---*/

Promise.resolve(1).then(function() {
  return Promise.resolve(2);
});

Promise.prototype.then = function(resolve) {
  assert(!isConstructor(resolve));
  assert.sameValue(resolve.length, 1);
  assert.sameValue(resolve.name, '');

  $DONE();
};
