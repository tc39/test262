/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  JS_EnumerateStandardClasses uses wrong attributes for undefined
esid: pending
---*/

for (var p in this);

assert.sameValue(Object.getOwnPropertyDescriptor(this, "undefined").writable, false);
