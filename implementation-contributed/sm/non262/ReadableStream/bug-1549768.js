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
---*/
var otherGlobal = newGlobal({ newCompartment: true });
var obj = { start(c) { } };
var Cancel = otherGlobal.ReadableStream.prototype.tee.call(new ReadableStream(obj))[0].cancel;

var stream = new ReadableStream(obj);
var [branch1, branch2] = ReadableStream.prototype.tee.call(stream);

Cancel.call(branch1, {});

gczeal(2, 1);

Cancel.call(branch2, {});

if (typeof assert.sameValue === 'function') {
}
