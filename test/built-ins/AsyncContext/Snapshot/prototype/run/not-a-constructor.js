// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  AsyncContext.Snapshot.prototype.run does not implement [[Construct]], is not
  new-able
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

assert.sameValue(isConstructor(AsyncContext.Snapshot.prototype.run), false, 'isConstructor(AsyncContext.Snapshot.prototype.run) must return false');

assert.throws(TypeError, () => {
  let s = new AsyncContext.Snapshot(); new s.run(() => { });
}, '`let s = new AsyncContext.Snapshot(); new s.run(() => {});` throws TypeError');

