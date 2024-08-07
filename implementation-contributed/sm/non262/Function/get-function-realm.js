// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Function-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var g1 = newGlobal();
var g1Fun = g1.eval("function Fun() {}; Fun");

// Bound function => cross-realm function.
var bound1 = Function.prototype.bind.call(g1Fun);
assert.sameValue(Object.getPrototypeOf(new bound1()), g1.Fun.prototype);

// Proxy => cross-realm function.
var proxy1 = new Proxy(g1Fun, {
    get: function() {} // Ensure "prototype" is |undefined|.
});
assert.sameValue(Object.getPrototypeOf(new proxy1()), g1.Object.prototype);

// Proxy => bound function => cross-realm function.
var proxy2 = new Proxy(bound1, {
    get: function() {}
});
assert.sameValue(Object.getPrototypeOf(new proxy2()), g1.Object.prototype);

// Revoked proxy => cross-realm function.
var r1 = Proxy.revocable(g1Fun, {
    get: function(t, name) {
        assert.sameValue(name, "prototype");
        r1.revoke();
    }
});
assertThrowsInstanceOf(() => new r1.proxy(), g1.TypeError);

// Bound function => proxy => bound function => cross-realm function.
var bound2 = Function.prototype.bind.call(proxy2);
assert.sameValue(Object.getPrototypeOf(new bound2()), g1.Object.prototype);

// Proxy => cross-realm revoked proxy => cross-realm function.
var r2 = Proxy.revocable(g1Fun, {
    get: function(t, name) {
        assert.sameValue(name, "prototype");
        r2.revoke();
    }
});
var g2 = newGlobal();
var proxy3 = new g2.Proxy(r2.proxy, {});
assertThrowsInstanceOf(() => new proxy3(), g1.TypeError);

