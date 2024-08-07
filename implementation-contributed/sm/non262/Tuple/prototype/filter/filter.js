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
8.2.3.13 Tuple.prototype.filter ( callbackfn [ , thisArg ] )
NOTE
callbackfn should be a function that accepts three arguments and returns a value that is coercible to the Boolean value true or false. filter calls callbackfn once for each element in the tuple, in ascending order, and constructs a new tuple of all the values for which callbackfn returns true.

If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackfn. If it is not provided, undefined is used instead.

callbackfn is called with three arguments: the value of the element, the index of the element, and the Tuple being traversed.

When the filter method is called with one or two arguments, the following steps are taken:

1. Let T be ? thisTupleValue(this value).
2. Let list be T.[[Sequence]].
3. Let len be the number of elements in list.
4. If IsCallable(callbackfn) is false, throw a TypeError exception.
5. Let newList be a new empty List.
6. Let k be 0.
7. Repeat, while k < len,
a. Let kValue be list[k].
b. Let selected be ! ToBoolean(? Call(callbackfn, thisArg, « kValue, k, T »)).
c. If selected is true, then
i. Append kValue to the end of list newList.
d. Set k to k + 1.
8. Return a new Tuple value whose [[Sequence]] is newLis.t

*/

/* Step 1 */
/* filter() should throw on a non-Tuple */
let method = Tuple.prototype.filter;
let pred = (x, i, tup) => x % 2 === 0;
assert.sameValue(method.call(#[1,2,3,4,5,6],pred), #[2,4,6]);
assert.sameValue(method.call(Object(#[1,2,3,4,5,6]), pred), #[2,4,6]);
assertThrowsInstanceOf(() => method.call("monkeys", pred), TypeError,
                       "value of TupleObject must be a Tuple");

let tup = #[1,2,3];

/* Step 4 */
/* callbackfn not callable -- should throw */
assertThrowsInstanceOf(() => tup.filter(), TypeError,
                       "missing function argument to Tuple.prototype.filter");
assertThrowsInstanceOf(() => tup.filter(undefined), TypeError,
                       "missing function argument to Tuple.prototype.filter");
assertThrowsInstanceOf(() => tup.filter("monkeys"), TypeError,
                       "bad function argument to Tuple.prototype.filter");


/* callbackfn with 1 argument -- should be allowed */
var pred2 = x => x % 2 === 0;
assert.sameValue(tup.filter(pred2), #[2]);

/* callbackfn with 2 arguments -- should be allowed */
pred2 = (x, i) => x + i < 5;
assert.sameValue(tup.filter(pred2), #[1, 2]);

/* callbackfn with > 3 arguments -- subsequent ones will be undefined */
var pred3 = (a, b, c, d, e) => e === undefined;
assert.sameValue(tup.filter(pred3), tup);

/* callbackfn should be able to use index and tuple */
var pred1 = (x, i, tup) => (tup.indexOf(x + i) !== (-1));
assert.sameValue(#[1,2,3,4,5,6,7].filter(pred1), #[1,2,3,4]);

/* explicit thisArg */
pred1 = function (x, i, tup) { return(this.elements.indexOf(x) !== -1); };
assert.sameValue(#[1,2,3,4,5].filter(pred1, { elements: [2, 4] }), #[2,4]);

/* Step 3 */
/* Test that length is still handled correctly if it's overridden */
Object.defineProperty(Tuple.prototype, "length", { get() { return 0 } })
assert.sameValue(tup.filter(pred), #[2]);

/* Step 7 */
assert.sameValue(#[].filter(pred), #[]);
assert.sameValue(#[1].filter(pred), #[]);
assert.sameValue(#[2].filter(pred), #[2]);
assert.sameValue(tup.filter(pred), #[2]);
assert.sameValue(tup.filter(x => x > 1), #[2,3]);

