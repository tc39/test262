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
features: [AsyncContext]
---*/

var asyncSnapshot = new AsyncContext.Snapshot();
assert.sameValue(Object.getPrototypeOf(asyncSnapshot), AsyncContext.Snapshot.prototype);
