// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: system
description: The System object is an ordinary object.
info: >
  The System Object

  The System object is the %System% intrinsic object and the initial value of
  the System property of the global object. The System object is an ordinary
  object.

  The System object is not a function object. It does not have a [[Construct]]
  internal method; it is not possible to use the System object as a constructor
  with the new operator. The System object also does not have a [[Call]]
  internal method; it is not possible to invoke the System object as a
  function.
---*/

assert.sameValue(typeof System, 'object', '`typeof System` is `"object"`');

// System is not callable
assert.throws(TypeError, function() {
  System();
});

// System doesn't have a constructor
assert.throws(TypeError, function() {
  new System();
});
