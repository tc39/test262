// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-snapshot.wrap
description: >
  Returns a function object.
info: |
  AsyncContext.Snapshot.wrap ( fn )

  7. Let realm be the current Realm record.
  8. Let prototype be realm.[[Intrinsics]].[[%Function.prototype%]].
  9. Return CreateBuiltinFunction(closure, length, name, « », realm, prototype, "wrapped").

features: [AsyncContext]
---*/

function callback() { }

const wrapped = AsyncContext.Snapshot.wrap(callback);

assert.sameValue(typeof wrapped, 'function', 'typeof wrapped is "function"');

assert.sameValue(
  Object.getPrototypeOf(wrapped),
  Function.prototype,
  'The prototype of wrapped is %Function.prototype%'
);
