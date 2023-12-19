// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
description: Promise.withResolvers meets the requirements for built-in objects
info: |
  Built-in functions that are not constructors do not have a "prototype"
  property unless otherwise specified in the description of a particular
  function.
---*/

assert.sameValue(
  Object.getOwnPropertyDescriptor(Promise.withResolvers, "prototype"),
  undefined,
  "Promise.withResolvers has no own prototype property"
);
