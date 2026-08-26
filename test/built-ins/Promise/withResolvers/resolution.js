// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Promise.withResolvers `resolve` function resolves the corresponding promise correctly
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
flags: [async]
---*/


var instance = Promise.withResolvers();

var resolveValue = {};

instance.promise.then(res => {
    assert.sameValue(res, resolveValue);
    $DONE();
});

instance.resolve(resolveValue);
