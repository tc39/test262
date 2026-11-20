// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  An accessor decorator receives the getter and setter that are on the
  prototype
esid: sec-applydecoratorstoelementdefinition
features: [decorators]
---*/

var received;

function dec(value, context) {
  received = value;
}

class C {
  @dec accessor x;
}

var desc = Object.getOwnPropertyDescriptor(C.prototype, 'x');
assert.sameValue(received.get, desc.get, 'the getter is the same function');
assert.sameValue(received.set, desc.set, 'the setter is the same function');
assert.sameValue(desc.enumerable, false, 'the decorated accessor is not enumerable');
