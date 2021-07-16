// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm-constructor
description: >
  new Realm() returns a realm instance
features: [callable-boundary-realms]
---*/
assert.sameValue(
  typeof Realm,
  'function',
  'This test must fail if Realm is not a function'
);

assert(new Realm() instanceof Realm);
