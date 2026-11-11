// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot
description: >
  The [[Prototype]] internal slot is computed from NewTarget.
info: |
  AsyncContext.Snapshot ( )

  ...
  3. Let asyncSnapshot be ? OrdinaryCreateFromConstructor(NewTarget, "%AsyncContext.Snapshot.prototype%", « [[AsyncSnapshotMapping]] »).
  ...
  5. Return asyncSnapshot.

  OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )

  ...
  2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
  3. Return ObjectCreate(proto, internalSlotsList).

  GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

  3. Let proto be ? Get(constructor, 'prototype').
  4. If Type(proto) is not Object, then
    a. Let realm be ? GetFunctionRealm(constructor).
    b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
  5. Return proto.
features: [AsyncContext, Reflect.construct]
---*/

var asyncSnapshot;

asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], Object);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), Object.prototype, 'NewTarget is built-in Object constructor');

var newTarget = function() {}.bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function() {
    return Array.prototype;
  }
});
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), Array.prototype, 'NewTarget is BoundFunction with accessor');
