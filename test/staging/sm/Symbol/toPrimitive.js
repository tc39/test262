// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
// ES6 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

// This method gets the primitive symbol from a Symbol wrapper object.
var sym = Symbol.for("truth")
var obj = Object(sym);
assert.sameValue(obj[Symbol.toPrimitive]("default"), sym);

// The hint argument is ignored.
assert.sameValue(obj[Symbol.toPrimitive]("number"), sym);
assert.sameValue(obj[Symbol.toPrimitive]("string"), sym);
assert.sameValue(obj[Symbol.toPrimitive](), sym);
assert.sameValue(obj[Symbol.toPrimitive](Math.atan2), sym);

// The this value can also be a primitive symbol.
assert.sameValue(sym[Symbol.toPrimitive](), sym);

// Or a wrapper to a Symbol object in another compartment.
var obj2 = createNewGlobal().Object(sym);
assert.sameValue(obj2[Symbol.toPrimitive]("default"), sym);

// Otherwise a TypeError is thrown.
var symbolToPrimitive = Symbol.prototype[Symbol.toPrimitive];
var nonSymbols = [
    undefined, null, true, 13, NaN, "justice", {}, [sym],
    symbolToPrimitive,
    new Proxy(obj, {})
];
for (var value of nonSymbols) {
    assertThrowsInstanceOf(() => symbolToPrimitive.call(value, "string"), TypeError);
}

// Surface features:
assert.sameValue(symbolToPrimitive.name, "[Symbol.toPrimitive]");
var desc = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);
assert.sameValue(desc.configurable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.writable, false);

