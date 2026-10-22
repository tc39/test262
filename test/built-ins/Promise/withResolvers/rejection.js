// Copyright (C) 2023 Peter Klecha. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Promise.withResolvers `reject` function rejects the corresponding promise correctly
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
flags: [async]
---*/


var instance = Promise.withResolvers();

var rejectString = "reject";

instance.promise.catch(err => {
    assert.sameValue(err, rejectString);
    $DONE();
});

instance.reject(rejectString);
