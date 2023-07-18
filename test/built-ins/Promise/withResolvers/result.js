// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Promise.withResolvers result is an object with keys "promise", "reject", and "resolve"
esid: sec-promise.withresolvers
features: [promise-with-resolvers, Object.hasOwn]
---*/


var instance = Promise.withResolvers();

assert.sameValue(typeof instance, "object");
assert.notSameValue(instance, null);
assert(instance instanceof Object);
assert(Object.hasOwn(instance, "promise"));
assert(Object.hasOwn(instance, "resolve"));
assert(Object.hasOwn(instance, "reject"));

