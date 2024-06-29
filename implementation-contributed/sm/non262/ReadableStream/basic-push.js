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

// Example of a stream that enqueues data asynchronously, whether the reader
// wants it or not, the "push" model.
let fbStream = new ReadableStream({
    start(controller) {
        simulatePacketsDriftingIn(controller);
    },
});

async function simulatePacketsDriftingIn(controller) {
    for (let i = 1; i <= 30; i++) {
        let importantData =
            (i % 15 == 0 ? "FizzBuzz" :
             i % 5 == 0 ? "Buzz":
             i % 3 == 0 ? "Fizz" :
             String(i));
        controller.enqueue(importantData);
        await asyncSleep(1 + i % 7);
    }
    controller.close();
}

const expected = [
    "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
    "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz",
    "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz"
];

async function test() {
    assert.sameValue(fbStream.locked, false);
    let reader = fbStream.getReader();
    assert.sameValue(fbStream.locked, true);

    let results = [];
    while (true) {
        let r = await reader.read();
        if (r.done) {
            break;
        }
        results.push(r.value);
    }

    assert.sameValue(results.join("-"), expected.join("-"));
    reader.releaseLock();
    assert.sameValue(fbStream.locked, false);
}

runAsyncTest(test);
