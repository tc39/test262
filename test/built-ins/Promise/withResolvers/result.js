// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Promise.withResolvers result is an object with keys "promise", "reject", and "resolve"
features: [promise-with-resolvers]
---*/


var instance = Promise.withResolvers();

assert.sameValue(typeof instance, "object");
assert.notSameValue(instance, null);
assert(Object.hasOwn(instance, "promise"));
assert(Object.hasOwn(instance, "resolve"));
assert(Object.hasOwn(instance, "reject"));

