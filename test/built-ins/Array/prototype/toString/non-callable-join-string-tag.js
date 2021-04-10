// Copyright (C) 2021 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.tostring
description: >
    If "join" value is non-callable, Object.prototype.toString intrinsic is called.
info: |
    Array.prototype.toString ( )

    [...]
    2. Let func be ? Get(array, "join").
    3. If IsCallable(func) is false, set func to the intrinsic function %Object.prototype.toString%.
    4. Return ? Call(func, array).
features: [Symbol.toStringTag, Proxy, Reflect]
---*/

assert(delete Object.prototype.toString);

Array.prototype.join = {};
assert.sameValue(Array.prototype.toString.call({}), "[object Object]");

let revokeOnGet = false;
const { proxy, revoke } = Proxy.revocable([], {
    get: (target, key, receiver) => {
        if (revokeOnGet)
            revoke();
        return Reflect.get(target, key, receiver);
    },
});

assert.sameValue(Array.prototype.toString.call(proxy), "[object Array]");
revokeOnGet = true;
assert.throws(TypeError, () => { Array.prototype.toString.call(proxy); });

Array.prototype.join = 1n;
assert.sameValue(Array.prototype.toString.call((function() { return arguments; })()), "[object Arguments]");
assert.sameValue(Array.prototype.toString.call(new Error), "[object Error]");

Array.prototype.join = Symbol();
assert.sameValue(Array.prototype.toString.call(new Boolean), "[object Boolean]");
assert.sameValue(Array.prototype.toString.call(new Number), "[object Number]");

Array.prototype.join = "join";
assert.sameValue(Array.prototype.toString.call(new String), "[object String]");
assert.sameValue(Array.prototype.toString.call(new Date), "[object Date]");

Array.prototype.join = 1;
assert.sameValue(Array.prototype.toString.call(new RegExp), "[object RegExp]");
assert.sameValue(Array.prototype.toString.call(new Proxy(() => {}, {})), "[object Function]");
assert.sameValue(Array.prototype.toString.call(new Proxy(new Date, {})), "[object Object]");

Array.prototype.join = true;
assert.sameValue(Array.prototype.toString.call({ [Symbol.toStringTag]: "Foo" }), "[object Foo]");
assert.sameValue(Array.prototype.toString.call(new Map), "[object Map]");

Array.prototype.join = null;
RegExp.prototype[Symbol.toStringTag] = "Foo";
assert.sameValue(Array.prototype.toString.call(new RegExp), "[object Foo]");
Number.prototype[Symbol.toStringTag] = Object("Foo"); // ignored
assert.sameValue(Array.prototype.toString.call(new Number), "[object Number]");

assert.sameValue(delete Array.prototype.join, true);

Object.defineProperty(JSON, Symbol.toStringTag, { value: "Foo" });
assert.sameValue(Array.prototype.toString.call(JSON), "[object Foo]");

assert.sameValue(delete Set.prototype[Symbol.toStringTag], true);
assert.sameValue(Array.prototype.toString.call(new Set), "[object Object]");

Object.defineProperty(Object.prototype, Symbol.toStringTag, { get: () => { throw new Test262Error(); } });
assert.throws(Test262Error, () => { Array.prototype.toString.call({}); });
