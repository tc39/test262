// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


//
//
/*---
esid: pending
description: |
  Lazy %AsyncIterator.prototype% methods throw eagerly when passed non-callables.
info: |
  Iterator Helpers proposal 2.1.6
features:
- AsyncIterator
- iterator-helpers
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
---*/

async function* gen() {}

const methods = [
  (iter, fn) => iter.map(fn),
  (iter, fn) => iter.filter(fn),
  (iter, fn) => iter.flatMap(fn),
];

for (const method of methods) {
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, 0), TypeError);
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, false), TypeError);
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, undefined), TypeError);
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, null), TypeError);
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, ''), TypeError);
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, Symbol('')), TypeError);
  assertThrowsInstanceOf(() => method(AsyncIterator.prototype, {}), TypeError);

  assertThrowsInstanceOf(() => method(gen(), 0), TypeError);
  assertThrowsInstanceOf(() => method(gen(), false), TypeError);
  assertThrowsInstanceOf(() => method(gen(), undefined), TypeError);
  assertThrowsInstanceOf(() => method(gen(), null), TypeError);
  assertThrowsInstanceOf(() => method(gen(), ''), TypeError);
  assertThrowsInstanceOf(() => method(gen(), Symbol('')), TypeError);
  assertThrowsInstanceOf(() => method(gen(), {}), TypeError);
}

