// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function is not a constructor, even if the original callback is.
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.

  sec-evaluatenew

  ...
  7. If IsConstructor(constructor) is false, throw a TypeError exception.
  ...
includes: [isConstructor.js]
features: [Reflect.construct, AsyncContext, arrow-function]
---*/

function Constructor() { }

// Constructor is indeed a constructor
new Constructor();
assert.sameValue(isConstructor(Constructor), true, 'Constructor must be a constructor');

// Checking that the function returned by wrap is not one.
const wrapped = AsyncContext.Snapshot.wrap(Constructor);

assert.sameValue(
  isConstructor(AsyncContext.Snapshot.wrap),
  false,
  'isConstructor(wrapped) must return false'
);

assert.throws(TypeError, () => {
  new wrapped();
}, '`new wrapped()` throws TypeError');
