// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


//
//
/*---
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Iterator
description: |
  pending
esid: pending
---*/

const iter = [].values();
const methods = [
  value => iter.take(value),
  value => iter.drop(value),
];

const objectWithToPrimitive = {
  [Symbol.toPrimitive]() {
    return {};
  }
};

for (const method of methods) {
  assertThrowsInstanceOf(() => method(0n), TypeError);
  assertThrowsInstanceOf(() => method(Symbol('')), TypeError);
  assertThrowsInstanceOf(() => method(objectWithToPrimitive), TypeError);
}

