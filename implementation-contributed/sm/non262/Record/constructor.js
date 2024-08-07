// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Record-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
assertThrowsInstanceOf(
  () => new Record(),
  TypeError,
  "Record is not a constructor"
);

assert.sameValue(typeof Record({}), "record");
assert.sameValue(typeof Object(Record({})), "object");
assert.sameValue(Record({}) instanceof Record, false);

// TODO: It's still not decided what the prototype of records should be
//assertThrowsInstanceOf(() => Object(Record({})) instanceof Record, TypeError);
// assert.sameValue(Record.prototype, null);
// assert.sameValue(Record({}).__proto__, null);
// assert.sameValue(Object(Record({})).__proto__, null);

assertThrowsInstanceOf(
  () => Record(),
  TypeError,
  "can't convert undefined to object"
);

assertThrowsInstanceOf(
  () => Record(undefined),
  TypeError,
  "can't convert undefined to object"
);

assertThrowsInstanceOf(
  () => Record(null),
  TypeError,
  "can't convert null to object"
);

