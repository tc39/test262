// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- onlyStrict
includes:
- non262-Proxy-shell.js
- non262-shell.js
- shell.js
description: |
  pending
esid: pending
---*/"use strict";

var target = { test: true };
Object.preventExtensions(target);

var proxy = new Proxy(target, {
    deleteProperty(target, property) {
        return true;
    }
});

assert.sameValue(delete proxy.missing, true);
assert.sameValue(Reflect.deleteProperty(proxy, "missing"), true);

assertThrowsInstanceOf(() => { delete proxy.test; }, TypeError);
assertThrowsInstanceOf(() => Reflect.deleteProperty(proxy, "test"), TypeError);

