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
TupleElementList : AssignmentExpression
1. Let initResult be the result of evaluating AssignmentExpression.
2. Let initValue be ? GetValue(initResult).
3. Return ? AddValueToTupleSequenceList(sequence, value).
*/

var a = 5;
var b = 10;
var arr = [1,2,3,4,5];
var badArr = [1, new Object(), 3];
var t = #[a < b ? "x" : "y"];
assert.sameValue(t, #["x"]);

t = #[0 in arr, 42 in arr, 1 in arr, 100 in arr];
assert.sameValue(t, #[true, false, true, false]);

t = #[a = 1, b = b * 3];
assert.sameValue(t, #[1, 30]);
assert.sameValue(a, 1);
assert.sameValue(b, 30);

/* 6.1.2.1
TupleElementList : AssignmentExpression
   ...
   2. Let initValue be ? GetValue(initResult).
   ...
   6.2.4.5 GetValue ( V )
     The abstract operation GetValue takes argument V. It performs the following steps when called:

    1. ReturnIfAbrupt(V).
*/
let bBefore = b;
let tBefore = t;
function f() { throw new RangeError(); }
assertThrowsInstanceOf(() => t = #[a = 2, f(), b = 3],
                       RangeError, "t = #[a = 2, f(), b = 3] throws");
assert.sameValue(a, 2);
assert.sameValue(b, bBefore);
assert.sameValue(t, tBefore);

/*
     GetValue
      ...
      3. If IsUnresolvableReference(V) is true, throw a ReferenceError exception.
*/
assertThrowsInstanceOf(() => t = #[unbound],
                       ReferenceError, "t = #[unbound] throws");
assert.sameValue(t, tBefore);

/* 6.1.2.1
TupleElementList : AssignmentExpression
   ...
   3. Return ? AddValueToTupleSequenceList(sequence, value).
*/
assertThrowsInstanceOf(() => t = #[new Object()],
                       TypeError, "Object in Tuple");
assert.sameValue(t, tBefore);
assertThrowsInstanceOf(() => t = #[{}],
                       TypeError, "Object in Tuple")
assert.sameValue(t, tBefore);
assertThrowsInstanceOf(() => t = #[new String("s")],
                       TypeError, "Object in Tuple")
assert.sameValue(t, tBefore);
assertThrowsInstanceOf(() => t = #[[1,2,3]],
                       TypeError, "Object in Tuple")
assert.sameValue(t, tBefore);
assertThrowsInstanceOf(() => t = #[function(x) { return x; }],
                       TypeError, "Object in Tuple")
assert.sameValue(t, tBefore);

/* 6.1.2.1

TupleElementList : SpreadElement
1. Return the Result of performing TupleSequenceAccumulation for SpreadElement with argument sequence.
*/
assert.sameValue(#[...arr], #[1,2,3,4,5]);
assertThrowsInstanceOf(() => #[...badArr],
                       TypeError, "Object in Tuple");

/*
TupleElementList : TupleElementList , AssignmentExpression
1. Perform TupleSequenceAccumulation for TupleElementList with argument sequence.
2. Let initResult be the result of evaluating AssignmentExpression.
3. Let initValue be ? GetValue(initResult).
4. Return ? AddValueToTupleSequenceList(sequence, value).
*/

assertThrowsInstanceOf(() => t = #[1, a = 5, b = new Object(), 5],
                       TypeError, "Object in Tuple");
assert.sameValue(t, tBefore);

/* TupleElementList : TupleElementList , SpreadElement
1. Perform TupleSequenceAccumulation for TupleElementList with argument sequence.
2. Return the Result of performing TupleSequenceAccumulation for SpreadElement with argument sequence.
*/

assert.sameValue(#["a", "b", ...arr, "c"], #["a", "b", 1, 2, 3, 4, 5, "c"]);
assertThrowsInstanceOf(() => t = #["a", "b", ...badArr, "c"],
                       TypeError, "Object in Tuple");

/*
SpreadElement : ... AssignmentExpression
1. Let spreadRef be the result of evaluating AssignmentExpression.
2. Let spreadObj be ? GetValue(spreadRef).
3. Let iteratorRecord be ? GetIterator(spreadObj).
4. Repeat,
a. Let next be ? IteratorStep(iteratorRecord).
b. If next is false, return sequence.
c. Let nextValue be ? IteratorValue(next).
d. Let completion be AddValueToTupleSequenceList(sequence, nextValue).
e. If completion is an abrupt completion, then
i. Return IteratorClose(iteratorRecord, completion).
*/
/* Step 2 */
assertThrowsInstanceOf(() => t = #[...unbound],
                       ReferenceError, "t = #[...unbound throws]");
assert.sameValue(t, tBefore);
/* Step 3 */
var notIterable = Symbol('c');
assertThrowsInstanceOf(() => t = #[...notIterable],
                       TypeError, "t = #[...notIterable] is type error");
/* TODO -- test other iterator cases */


