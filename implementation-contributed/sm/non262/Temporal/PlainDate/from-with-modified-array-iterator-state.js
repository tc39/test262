// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Temporal-PlainDate-shell.js
- non262-Temporal-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Temporal
description: |
  pending
esid: pending
---*/
const ArrayIteratorPrototype = Object.getPrototypeOf([][Symbol.iterator]());

// Modify the ArrayIteratorPrototype prototype chain to disable optimisations.
Object.setPrototypeOf(ArrayIteratorPrototype, {});

let calendar = new Temporal.Calendar("iso8601");

let dateLike = {
  calendar,
  day: 1,
  month: 1,
  year: 0,
};

let result = Temporal.PlainDate.from(dateLike);

assert.sameValue(result.toString(), "0000-01-01");

