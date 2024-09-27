// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-ReadableStream-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- ReadableStream
description: |
  pending
esid: pending
---*/// A stream can become errored with an exception from another realm.

let g = newGlobal();
let g_enqueue;
new g.ReadableStream({
    start(controller) {
        g_enqueue = controller.enqueue;
    },
});

let controller;
let stream = new ReadableStream({
    start(c) {
        controller = c;
    }
}, {
    size(chunk) {}
});

assertThrowsInstanceOf(() => g_enqueue.call(controller, {}), g.RangeError);

