// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.5
description: >
    computed property class method names can be a symbol
includes: [compareArray.js]
---*/

function ID(x) {
  return x;
}

var sym1 = Symbol();
var sym2 = Symbol();
class C {
  a() { return 'A'; }
  [sym1]() { return 'B'; }
  c() { return 'C'; }
  [ID(sym2)]() { return 'D'; }
}
assert.sameValue(new C().a(), 'A', "`new C().a()` returns `'A'`. Defined as `a() { return 'A'; }`");
assert.sameValue(new C()[sym1](), 'B', "`new C()[sym1]()` returns `'B'`. Defined as `[sym1]() { return 'B'; }`");
assert.sameValue(new C().c(), 'C', "`new C().c()` returns `'C'`. Defined as `c() { return 'C'; }`");
assert.sameValue(new C()[sym2](), 'D', "`new C()[sym2]()` returns `'D'`. Defined as `[ID(sym2)]() { return 'D'; }`");
assert(
  compareArray(Object.keys(C.prototype), []),
  "`compareArray(Object.keys(C.prototype), [])` returns `true`"
);
assert(
  compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'c']),
  "`compareArray(Object.getOwnPropertyNames(C.prototype), ['constructor', 'a', 'c'])` returns `true`"
);

// compareArray expects arguments to be sorted,
// which will cause an array containing symbols to
// throw an exception when toString() is called.
//
// Since there is no guarantee of order:
//
//    - Assert only that the symbol is present
//    - Assert that the length is correct
//
var symbols = Object.getOwnPropertySymbols(C.prototype);

assert(
  symbols.indexOf(sym1) !== -1,
  "The result of `symbols.indexOf(sym1) !== -1` is `true`, after executing `var symbols = Object.getOwnPropertySymbols(C.prototype);`"
);
assert(
  symbols.indexOf(sym2) !== -1,
  "The result of `symbols.indexOf(sym2) !== -1` is `true`, after executing `var symbols = Object.getOwnPropertySymbols(C.prototype);`"
);
assert.sameValue(symbols.length, 2, "The value of `symbols.length` is `2`, after executing `var symbols = Object.getOwnPropertySymbols(C.prototype);`");
