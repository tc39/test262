// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*//*
8.2.3.31 Tuple.prototype.with ( index, value )
When the with method is called with two arguments, it returns a new Tuple with the element at index index replaced with value value.

1. Let T be ? thisTupleValue(this value).
2. Let list be a new List containing the elements of T.[[Sequence]].
3. Let length be the length of list list.
4. Let I be ? ToIndex(index).
5. If I ≥ length, throw a RangeError exception.
6. If Type(value) is Object, throw a TypeError exception.
7. Set list[I] to value.
8. Return a new Tuple value whose [[Sequence]] is list.
*/
/* Step 1 */
/* with() should throw on a non-Tuple */
let method = Tuple.prototype.with;
assert.sameValue(method.call(#[1,2,3], 1, "monkeys"), #[1, "monkeys", 3]);
assert.sameValue(method.call(Object(#[1,2,3]), 1, "monkeys"), #[1, "monkeys", 3]);
assertThrowsInstanceOf(() => method.call("monkeys"), TypeError,
                       "value of TupleObject must be a Tuple");
assertThrowsInstanceOf(() => method.call(true), TypeError,
                       "value of TupleObject must be a Tuple");
assertThrowsInstanceOf(() => method.call(false), TypeError,
                       "value of TupleObject must be a Tuple");

/* method does not access constructor */
var t = #[1];
t.constructor = null;
var result = t.with(0, 0);
assert.sameValue(result, #[0]);
assert.sameValue(Object.getPrototypeOf(result), Tuple.prototype);

/* Step 3 */
/* Test that length is still handled correctly if it's overridden */
Object.defineProperty(Tuple.prototype, "length", { get() { return 0 } })
assert.sameValue(#[1,2,3,4,5].with(1, 5), #[1,5,3,4,5]);

var tup = #[1,2,3];
var len = 3;
/* Step 4 -- toIndex returns 0 for non-integers */
assert.sameValue(tup.with("monkeys", 2), tup.with(0, 2));
assert.sameValue(tup.with(undefined, 2), tup.with(0, 2));
assert.sameValue(tup.with(undefined), tup.with(0, undefined));
assert.sameValue(tup.with(), tup.with(0, undefined));

/* Step 5 */
assertThrowsInstanceOf(() => tup.with(-5, "monkeys"),
                       RangeError, "index out of range");
assertThrowsInstanceOf(() => tup.with(Number.MAX_SAFE_INTEGER, "monkeys"),
                       RangeError, "index out of range");
assertThrowsInstanceOf(() => tup.with(len + 5, "monkeys"),
                       RangeError, "index out of range");

/* Step 6 -- item is Object */
assertThrowsInstanceOf(() => tup.with(1, []),
                       TypeError, "Tuple can't contain Object");
assertThrowsInstanceOf(() => tup.with(0, new Object()),
                       TypeError, "Tuple can't contain Object");
assertThrowsInstanceOf(() => tup.with(2, {'a': 'b'}),
                       TypeError, "Tuple can't contain Object");

/* Step 8 */
assert.sameValue(tup.with(0, "monkeys"), #["monkeys", 2, 3]);
assert.sameValue(tup.with(1, #['a', 'b', 'c']), #[1, #['a', 'b', 'c'], 3]);
assert.sameValue(tup.with(2, 42), #[1, 2, 42]);

