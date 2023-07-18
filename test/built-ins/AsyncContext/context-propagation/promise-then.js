// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
features: [AsyncContext]
flags: [async]
---*/

const asyncVar = new AsyncContext.Variable();

function thenCallback() {
    assert.sameValue(asyncVar.get(), "then registration time");
}

let resolveFn;
const promise = asyncVar.run("promise creation time", () => {
    return new Promise(resolve => {
        resolveFn = resolve;
    });
});

asyncVar.run("then registration time", () => {
    return promise.then(thenCallback);
}).then($DONE, $DONE);

asyncVar.run("resolution time", () => {
    resolveFn();
});
