// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  The returned function's prototype is the current realm's %Function.prototype%
  intrinsic.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  7. Let realm be the current Realm record.
  8. Let prototype be realm.[[Intrinsics]].[[%Function.prototype%]].
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").

features: [AsyncContext]
---*/

const realm1 = $262.createRealm();
const realm2 = $262.createRealm();
const realm3 = $262.createRealm();

const callback = realm1.evalScript(
  "(function callback() { })"
);

realm3.global.callback = callback;
realm3.global.wrap = realm2.global.AsyncContext.Snapshot.wrap;
const wrapped = realm3.evalScript(
  "globalThis.wrap(globalThis.callback)"
);

assert.sameValue(
  Object.getPrototypeOf(wrapped),
  realm2.global.Function.prototype,
  'The prototype of wrapped is realm2\'s %Function.prototype%'
);
