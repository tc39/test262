// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-ReadableStream-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/
if ("ignoreUnhandledRejections" in this) {
  ignoreUnhandledRejections();
}

// Example of a stream that produces data on demand, the "pull" model.
let fibStream = new ReadableStream({
    start(controller) {
        this.a = 0;
        this.b = 1;
        controller.enqueue(0);
        controller.enqueue(1);
    },

    pull(controller) {
        [this.a, this.b] = [this.b, this.a + this.b];
        controller.enqueue(this.b);
    }
});

async function test() {
    assert.sameValue(fibStream.locked, false);
    let reader = fibStream.getReader();
    assert.sameValue(fibStream.locked, true);

    let results = [];
    while (results.length < 10) {
        results.push((await reader.read()).value);
    }

    assert.sameValue(results.join(), "0,1,1,2,3,5,8,13,21,34");
    reader.releaseLock();
    assert.sameValue(fibStream.locked, false);
}

runAsyncTest(test);
