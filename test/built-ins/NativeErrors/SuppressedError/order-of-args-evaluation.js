// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-suppressederror-constructor
description: >
  Process arguments in superclass-then-subclass order
info: |
  SuppressedError ( error, suppressed, message )

  3. If message is not undefined, then
    a. Let messageString be ? ToString(message).
    b. Perform CreateNonEnumerableDataPropertyOrThrow(O, "message", messageString).
  4. Perform CreateNonEnumerableDataPropertyOrThrow(O, "error", error).
  5. Perform CreateNonEnumerableDataPropertyOrThrow(O, "suppressed", suppressed).

features: [explicit-resource-management, Symbol.iterator]
---*/

let messageStringified = false;
const message = {
  toString() {
    messageStringified = true;
    return '';
  }
};
const error = {};
const suppressed = {};

const e = new SuppressedError(error, suppressed, message);

assert.sameValue(messageStringified, true);
const keys = Object.getOwnPropertyNames(e);
assert(keys.indexOf("message") === 0, "Expected 'message' to be defined first");
assert(keys.indexOf("error") === 1, "Expected 'error' to be defined second");
assert(keys.indexOf("suppressed") === 2, "Expected 'suppressed' to be defined third");

