// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-error.prototype-stack
description: >
  Property descriptor of Error.prototype.stack
info: |
  Error.prototype.stack is an accessor property with attributes
  { [[Enumerable]]: false, [[Configurable]]: true }.
features: [error-stack-accessor]
---*/

var desc = Object.getOwnPropertyDescriptor(Error.prototype, 'stack');

assert.sameValue(typeof desc.get, 'function', 'typeof desc.get');
assert.sameValue(typeof desc.set, 'function', 'typeof desc.set');
assert.sameValue(desc.value, undefined, 'desc.value');
assert.sameValue(desc.writable, undefined, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
