// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciterator
description: Default [[Prototype]] value derived from realm of the NewTarget.
info: |
  AsyncIterator ( len )

  ...
  3. If NewTarget is undefined, let newTarget be the active function object; else let newTarget be NewTarget.
  4. Let proto be ? GetPrototypeFromConstructor(newTarget, "%AsyncIterator.prototype%").
  5. Let AsyncIterator be ! AsyncIteratorCreate(0, proto).
  ...
  9. Return AsyncIterator.

  GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  ...
  3. Let proto be ? Get(constructor, "prototype").
  4. If Type(proto) is not Object, then
    a. Let realm be ? GetFunctionRealm(constructor).
    b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
  5. Return proto.
features: [cross-realm, iterator-helpers, Reflect, Symbol]
---*/

let other = $262.createRealm().global;
let newTarget = new other.Function();
let ai;

newTarget.prototype = undefined;
ai = Reflect.construct(AsyncIterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.AsyncIterator.prototype, 'Object.getPrototypeOf("Reflect.construct(AsyncIterator, [1], newTarget)") must return the value of other.AsyncIterator.prototype');

newTarget.prototype = null;
ai = Reflect.construct(AsyncIterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.AsyncIterator.prototype, 'Object.getPrototypeOf("Reflect.construct(AsyncIterator, [1], newTarget)") must return the value of other.AsyncIterator.prototype');

newTarget.prototype = true;
ai = Reflect.construct(AsyncIterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.AsyncIterator.prototype, 'Object.getPrototypeOf("Reflect.construct(AsyncIterator, [1], newTarget)") must return the value of other.AsyncIterator.prototype');

newTarget.prototype = '';
ai = Reflect.construct(AsyncIterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.AsyncIterator.prototype, 'Object.getPrototypeOf("Reflect.construct(AsyncIterator, [1], newTarget)") must return the value of other.AsyncIterator.prototype');

newTarget.prototype = Symbol();
ai = Reflect.construct(AsyncIterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.AsyncIterator.prototype, 'Object.getPrototypeOf("Reflect.construct(AsyncIterator, [1], newTarget)") must return the value of other.AsyncIterator.prototype');

newTarget.prototype = 0;
ai = Reflect.construct(AsyncIterator, [1], newTarget);
assert.sameValue(Object.getPrototypeOf(ai), other.AsyncIterator.prototype, 'Object.getPrototypeOf("Reflect.construct(AsyncIterator, [1], newTarget)") must return the value of other.AsyncIterator.prototype');
