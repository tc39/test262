// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot
description: Default [[Prototype]] value derived from realm of the newTarget
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
features: [AsyncContext, cross-realm, Reflect, Symbol]
---*/

var other = $262.createRealm().global;
var newTarget = new other.Function();
var asyncSnapshot;

newTarget.prototype = undefined;
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), other.AsyncContext.Snapshot.prototype, 'newTarget.prototype is undefined');

newTarget.prototype = null;
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), other.AsyncContext.Snapshot.prototype, 'newTarget.prototype is null');

newTarget.prototype = true;
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), other.AsyncContext.Snapshot.prototype, 'newTarget.prototype is a Boolean');

newTarget.prototype = '';
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), other.AsyncContext.Snapshot.prototype, 'newTarget.prototype is a String');

newTarget.prototype = Symbol();
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), other.AsyncContext.Snapshot.prototype, 'newTarget.prototype is a Symbol');

newTarget.prototype = 1;
asyncSnapshot = Reflect.construct(AsyncContext.Snapshot, [], newTarget);
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), other.AsyncContext.Snapshot.prototype, 'newTarget.prototype is a Number');

