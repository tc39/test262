// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot
description: >
  Returns a new ordinary object from the FinalizationRegistry constructor
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
features: [AsyncContext, for-of]
---*/

var asyncSnapshot = new AsyncContext.Snapshot();

assert.sameValue(Object.getPrototypeOf(asyncSnapshot), AsyncContext.Snapshot.prototype);
assert.sameValue(asyncSnapshot instanceof AsyncContext.Snapshot, true, 'instanceof');

for (let key of Object.getOwnPropertyNames(asyncSnapshot)) {
  assert(false, `should not set any own named properties: ${key}`);
}

for (let key of Object.getOwnPropertySymbols(asyncSnapshot)) {
  assert(false, `should not set any own symbol properties: ${String(key)}`);
}

assert.sameValue(Object.getPrototypeOf(asyncSnapshot), AsyncContext.Snapshot.prototype);
