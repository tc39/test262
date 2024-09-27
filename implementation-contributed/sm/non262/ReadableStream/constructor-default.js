// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
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
---*/
// The second argument to `new ReadableStream` defaults to `{}`, so it observes
// properties hacked onto Object.prototype.

let log = [];

Object.defineProperty(Object.prototype, "size", {
    configurable: true,
    get() {
        log.push("size");
        log.push(this);
        return undefined;
    }
});
Object.prototype.highWaterMark = 1337;

let s = new ReadableStream({
    start(controller) {
        log.push("start");
        log.push(controller.desiredSize);
    }
});
assert.deepEqual(log, ["size", {}, "start", 1337]);

