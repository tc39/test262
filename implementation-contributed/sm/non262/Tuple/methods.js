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
---*/
let tup = #[1,2,3];
let tup2 = #[1,2,3];
let empty = #[];

var tReversed = tup.toReversed();
assert.sameValue(tReversed, #[3, 2, 1]);
assert.sameValue(tup, tup2);
assert.sameValue(#[].toReversed(), #[]);


let tup5 = #[42, 1, 5, 0, 333, 10];
let sorted_result = tup5.toSorted();
let expected_result = #[0, 1, 10, 333, 42, 5];
assert.sameValue(sorted_result, expected_result);
let sorted_result2 = tup5.toSorted((x, y) => y > x);
let expected_result2 = #[333, 42, 10, 5, 1, 0];
assert.sameValue(sorted_result2, expected_result2);

assertThrowsInstanceOf(() => tup5.toSorted("monkeys"),
                       TypeError,
                       "invalid Array.prototype.toSorted argument")

/* toSpliced */
/* examples from:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice */

function unchanged(t) {
    assert.sameValue(t, #['angel', 'clown', 'mandarin', 'sturgeon']);
}

// Remove no elements before index 2, insert "drum"
let myFish = #['angel', 'clown', 'mandarin', 'sturgeon']
var myFishSpliced = myFish.toSpliced(2, 0, 'drum')
unchanged(myFish);
assert.sameValue(myFishSpliced, #['angel', 'clown', 'drum', 'mandarin', 'sturgeon']);


// Remove no elements before index 2, insert "drum" and "guitar"
myFishSpliced = myFish.toSpliced(2, 0, 'drum', 'guitar');
unchanged(myFish);
assert.sameValue(myFishSpliced, #['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon'])

// Remove 1 element at index 3
let myFish1 = #['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
myFishSpliced = myFish1.toSpliced(3, 1);
assert.sameValue(myFish1, #['angel', 'clown', 'drum', 'mandarin', 'sturgeon']);
assert.sameValue(myFishSpliced, #['angel', 'clown', 'drum', 'sturgeon']);

// Remove 1 element at index 2, and insert 'trumpet'
let myFish2 = #['angel', 'clown', 'drum', 'sturgeon']
myFishSpliced = myFish2.toSpliced(2, 1, 'trumpet');
assert.sameValue(myFish2, #['angel', 'clown', 'drum', 'sturgeon']);
assert.sameValue(myFishSpliced, #['angel', 'clown', 'trumpet', 'sturgeon']);

// Remove 2 elements at index 0, and insert 'parrot', 'anemone', and 'blue'
let myFish3 = #['angel', 'clown', 'trumpet', 'sturgeon']
myFishSpliced = myFish3.toSpliced(0, 2, 'parrot', 'anemone', 'blue');
assert.sameValue(myFish3, #['angel', 'clown', 'trumpet', 'sturgeon']);
assert.sameValue(myFishSpliced, #['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']);

// Remove 2 elements, starting at index 2
let myFish4 = #['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
myFishSpliced = myFish4.toSpliced(2, 2);
assert.sameValue(myFish4, #['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']);
assert.sameValue(myFishSpliced, #['parrot', 'anemone', 'sturgeon']);

// Remove 1 element from index -2
myFishSpliced = myFish.toSpliced(-2, 1);
unchanged(myFish);
assert.sameValue(myFishSpliced, #['angel', 'clown', 'sturgeon']);

// Remove all elements, starting from index 2
myFishSpliced = myFish.toSpliced(2);
unchanged(myFish);
assert.sameValue(myFishSpliced, #['angel', 'clown']);

assertThrowsInstanceOf(() => myFish.toSpliced(1, 0, new Object(42)),
                       TypeError,
                       "Record and Tuple can only contain primitive values");

//******************
function concatTest(t, expected, ...args) {
    let result = t.concat(...args);
    assert.sameValue(result, expected);
}

let tupConcat = tup.concat(#[4,5,6]);
assert.sameValue(tup, tup2);
assert.sameValue(tupConcat, #[1,2,3,4,5,6]);

concatTest(tup, tup, #[]);
concatTest(empty, tup, #[1,2,3]);
concatTest(tup, #[1,2,3,1,2,3,4,5,6],1,2,3,4,5,6);
concatTest(tup, #[1,2,3,1,2,3,4,5,6],1,#[2,3,4],5,6);
concatTest(tup, #[1,2,3,1,2,3,4],[1,2,3,4]);
concatTest(tup, #[1,2,3,1,2,3,4,5,6],1,[2,3,4],5,6);
concatTest(tup, #[1,2,3,1,2,3,4,5,6],[1,2,3],[4,5,6]);
concatTest(tup, #[1,2,3,1,2,3,4,5,6],#[1,2,3],#[4,5,6]);

// .includes()

assert.sameValue(tup.includes(1), true);
assert.sameValue(tup.includes(2), true);
assert.sameValue(tup.includes(3), true);
assert.sameValue(empty.includes(1), false);
assert.sameValue(empty.includes(0), false);
assert.sameValue(empty.includes(0, 1), false);
assert.sameValue(tup.includes(2, 1), true);
assert.sameValue(tup.includes(2, 2), false);
assert.sameValue(tup.includes(2, -1), false);
assert.sameValue(tup.includes(2, -2), true);
assert.sameValue(tup.includes(0, Infinity), false);
assert.sameValue(tup.includes(2, -Infinity), true);
assert.sameValue(tup.includes(2, undefined), true);

// .indexOf()
assert.sameValue(tup.indexOf(1), 0);
assert.sameValue(tup.indexOf(2), 1);
assert.sameValue(tup.indexOf(3), 2);
assert.sameValue(empty.indexOf(1), -1);
assert.sameValue(empty.indexOf(0), -1);
assert.sameValue(empty.indexOf(0, 1), -1);
assert.sameValue(tup.indexOf(2, 1), 1);
assert.sameValue(tup.indexOf(2, 2), -1);
assert.sameValue(tup.indexOf(2, -1), -1);
assert.sameValue(tup.indexOf(2, -2), 1);
assert.sameValue(tup.indexOf(0, Infinity), -1);
assert.sameValue(tup.indexOf(2, -Infinity), 1);
assert.sameValue(tup.indexOf(2, undefined), 1);

// .join()
assert.sameValue(tup.join(), "1,2,3");
assert.sameValue(tup.join("~"),"1~2~3");
assert.sameValue(#[1].join(), "1");
assert.sameValue(empty.join(), "");
assert.sameValue(#[1,2,undefined,3].join(), "1,2,,3");
assert.sameValue(#[1,null,2,3].join(), "1,,2,3");

// .lastIndexOf()
assert.sameValue(tup.lastIndexOf(1), 0);
assert.sameValue(tup.lastIndexOf(2), 1);
assert.sameValue(tup.lastIndexOf(3), 2);
assert.sameValue(empty.lastIndexOf(1), -1);
assert.sameValue(empty.lastIndexOf(0), -1);
assert.sameValue(empty.lastIndexOf(0, 1), -1);
assert.sameValue(tup.lastIndexOf(2, 1), 1);
assert.sameValue(tup.lastIndexOf(2, 0), -1);
assert.sameValue(tup.lastIndexOf(2, -3), -1);
assert.sameValue(tup.lastIndexOf(2, -2), 1);
assert.sameValue(tup.lastIndexOf(2, -Infinity), -1);
var duplicates = #[1,2,3,1,3,1,5,6,1,2,10];
assert.sameValue(duplicates.lastIndexOf(2), 9);
assert.sameValue(duplicates.lastIndexOf(3, 2), 2);
assert.sameValue(duplicates.lastIndexOf(3, -7), 4);
assert.sameValue(duplicates.lastIndexOf(1), 8);
assert.sameValue(duplicates.lastIndexOf(1, 0), 0);
assert.sameValue(duplicates.lastIndexOf(1, -5), 5);

// .slice()
var sliced = empty.slice(2);
assert.sameValue(empty, #[]);
assert.sameValue(empty, sliced);
sliced = empty.slice(2, 3);
assert.sameValue(empty, sliced);
sliced = tup.slice(1);
assert.sameValue(tup, tup2);
assert.sameValue(sliced, #[2,3]);
sliced = tup.slice(3);
assert.sameValue(sliced, #[]);
sliced = tup.slice(0, 0);
assert.sameValue(sliced, #[]);
sliced = tup.slice(0, 1);
assert.sameValue(sliced, #[1]);
sliced = tup.slice(0, 3);
assert.sameValue(sliced, tup);

// .toString()
assert.sameValue(tup.toString(), "1,2,3");
assert.sameValue(empty.toString(), "");
assert.sameValue(#[1].toString(), "1");
assert.sameValue(myFish.toString(), "angel,clown,mandarin,sturgeon");

// .toLocaleString() -- TODO more tests
assert.sameValue(tup.toString(), tup.toLocaleString());
assert.sameValue(empty.toString(), empty.toLocaleString());
assert.sameValue(myFish.toString(), myFish.toLocaleString());

// .entries()
var iterator = tup.entries();
var result;
result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value[0], 0);
assert.sameValue(result.value[1], 1);
assert.sameValue(result.value.length, 2);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value[0], 1);
assert.sameValue(result.value[1], 2);
assert.sameValue(result.value.length, 2);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value[0], 2);
assert.sameValue(result.value[1], 3);
assert.sameValue(result.value.length, 2);

result = iterator.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);

iterator = empty.entries();
var result1 = iterator.next();
assert.sameValue(result1.done, true);
assert.sameValue(result1.value, undefined);

// .every()
var everyResult = tup.every(x => x < 10);
assert.sameValue(tup, tup2);
assert.sameValue(everyResult, true);
everyResult = tup.every(x => x < 2);
assert.sameValue(everyResult, false);
assert.sameValue(true, empty.every(x => a > 100));

assertThrowsInstanceOf(() => tup.every(),
                       TypeError,
                       "missing argument 0 when calling function Tuple.prototype.every");

assertThrowsInstanceOf(() => tup.every("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

// .filter()
var filtered = tup.filter(x => x % 2 == 1);
assert.sameValue(tup, tup2);
assert.sameValue(filtered, #[1,3]);
assert.sameValue(#[].filter(x => x), #[]);

assertThrowsInstanceOf(() => tup.filter(),
                       TypeError,
                       "missing argument 0 when calling function Tuple.prototype.filter");

assertThrowsInstanceOf(() => tup.filter("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

// .find()
var findResult = tup.find(x => x > 2);
assert.sameValue(tup, tup2);
assert.sameValue(findResult, 3);
assert.sameValue(#[].find(x => true), undefined);

assertThrowsInstanceOf(() => tup.find(),
                       TypeError,
                       "missing argument 0 when calling function Tuple.prototype.find");

assertThrowsInstanceOf(() => tup.find("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

// .findIndex()
var findIndexResult = tup.findIndex(x => x > 2);
assert.sameValue(tup, tup2);
assert.sameValue(findIndexResult, 2);
assert.sameValue(#[].findIndex(x => true), -1);

assertThrowsInstanceOf(() => tup.findIndex(),
                       TypeError,
                       "missing argument 0 when calling function Tuple.prototype.find");

assertThrowsInstanceOf(() => tup.findIndex("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");


// .forEach()
var a = 0;
var forEachResult = tup.forEach(x => a += x);
assert.sameValue(tup, tup2);
assert.sameValue(forEachResult, undefined);
assert.sameValue(a, 6);

assert.sameValue(undefined, empty.forEach(x => a += x));
assert.sameValue(a, 6);

assertThrowsInstanceOf(() => tup.forEach(),
                       TypeError,
                       "missing argument 0 when calling function Tuple.prototype.forEach");

assertThrowsInstanceOf(() => tup.forEach("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

// .keys()
var iterator = tup.keys();
var result;
result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 0);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 1);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 2);

result = iterator.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);

iterator = empty.keys();
var result1 = iterator.next();
assert.sameValue(result1.done, true);
assert.sameValue(result1.value, undefined);

// .map()
var mapResult = tup.map(x => x*x);
assert.sameValue(tup, tup2);
assert.sameValue(mapResult, #[1, 4, 9]);
assert.sameValue(empty, empty.map(x => x*x));

assertThrowsInstanceOf(() => tup.map(x => new Object(x)),
                       TypeError,
                       "Record and Tuple can only contain primitive values");

assertThrowsInstanceOf(() => tup.map("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

// .reduce()
var add = (previousValue, currentValue, currentIndex, O) =>
    previousValue + currentValue;
var reduceResult = tup.reduce(add);
assert.sameValue(tup, tup2);
assert.sameValue(reduceResult, 6);
assert.sameValue(tup.reduce(add, 42), 48);
assert.sameValue(0, empty.reduce(add, 0));

assertThrowsInstanceOf(() => tup.reduce(),
                       TypeError,
                       "Tuple.prototype.reduce");

assertThrowsInstanceOf(() => tup.reduce("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

assertThrowsInstanceOf(() => empty.reduce(add),
                       TypeError,
                       "reduce of empty tuple with no initial value");

// .reduceRight()
var sub = (previousValue, currentValue, currentIndex, O) =>
    previousValue - currentValue;
var reduceResult = tup.reduceRight(sub);
assert.sameValue(tup, tup2);
assert.sameValue(reduceResult, 0);
assert.sameValue(tup.reduceRight(sub, 42), 36);
assert.sameValue(0, empty.reduceRight(sub, 0));

assertThrowsInstanceOf(() => tup.reduceRight(),
                       TypeError,
                       "Tuple.prototype.reduceRight");

assertThrowsInstanceOf(() => tup.reduceRight("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

assertThrowsInstanceOf(() => empty.reduceRight(sub),
                       TypeError,
                       "reduce of empty tuple with no initial value");

// .some()
var truePred = x => x % 2 == 0;
var falsePred = x => x > 30;
var trueResult = tup.some(truePred);
assert.sameValue(tup, tup2);
assert.sameValue(trueResult, true);
var falseResult = tup.some(falsePred);
assert.sameValue(falseResult, false);
assert.sameValue(false, empty.some(truePred));

assertThrowsInstanceOf(() => tup.some(),
                       TypeError,
                       "Tuple.prototype.some");

assertThrowsInstanceOf(() => tup.some("monkeys"),
                       TypeError,
                       "\"monkeys\" is not a function");

// .values()
var iterator = tup.values();
var result;
result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 1);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 2);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 3);

result = iterator.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);

iterator = empty.values();
var result1 = iterator.next();
assert.sameValue(result1.done, true);
assert.sameValue(result1.value, undefined);

// @@iterator

var iterator = tup[Symbol.iterator](tup);
var result;
result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 1);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 2);

result = iterator.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 3);

result = iterator.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);

iterator = empty[Symbol.iterator](empty);
var result1 = iterator.next();
assert.sameValue(result1.done, true);
assert.sameValue(result1.value, undefined);

// @@toStringTag

assert.sameValue(tup[Symbol.toStringTag], "Tuple");
assert.sameValue(Object(#[1,2,3])[Symbol.toStringTag], "Tuple");

// length
assert.sameValue(tup.length, 3);
assert.sameValue(Object(#[1,2,3]).length, 3);
assert.sameValue(empty.length, 0);
assert.sameValue(Object(#[]).length, 0);

// .flat()
var toFlatten = #[#[1,2],#[3,#[4,5]],#[6],#[7,8,#[9,#[10,#[11,12]]]]];
var toFlatten2 = #[#[1,2],#[3,#[4,5]],#[6],#[7,8,#[9,#[10,#[11,12]]]]];
assert.sameValue(toFlatten.flat(10), #[1,2,3,4,5,6,7,8,9,10,11,12]);
assert.sameValue(toFlatten, toFlatten2);
assert.sameValue(tup.flat(), tup);
assert.sameValue(empty.flat(), empty);
assert.sameValue(toFlatten.flat(2), #[1,2,3,4,5,6,7,8,9,#[10,#[11,12]]]);
assert.sameValue(toFlatten.flat(), #[1,2,3,#[4,5],6,7,8,#[9,#[10,#[11,12]]]]);

// .flatMap()
var inc = (x, sourceIndex, source) => #[x, x+1];
var toFlatten0 = #[1, 2, 3];
assert.sameValue(toFlatten0.flatMap(inc), #[1, 2, 2, 3, 3, 4]);
assert.sameValue(empty.flatMap(inc), empty);

// miscellaneous

let nullaryMethods = [[Tuple.prototype.toReversed, x => x === #[1,2,3]],
                      [Tuple.prototype.toSorted, x => x === #[1,2,3]],
                      [Tuple.prototype.toString, x => x === "3,2,1"],
                      [Tuple.prototype.toLocaleString, x => x === "3,2,1"],
                      [Tuple.prototype.join, x => x === "3,2,1"],
                      [Tuple.prototype.entries, x => typeof(x) === "object"],
                      [Tuple.prototype.keys, x => typeof(x) === "object"],
                      [Tuple.prototype.values, x => typeof(x) === "object"],
                      [Tuple.prototype.flat, x => x === #[3,2,1]]];

for (p of nullaryMethods) {
    let method = p[0];
    let f = p[1];
    assert.sameValue(f(method.call(Object(#[3,2,1]))), true);
}

function assertTypeError(f) {
    for (thisVal of ["monkeys", [3,2,1], null, undefined, 0]) {
        assertThrowsInstanceOf(f(thisVal), TypeError, "value of TupleObject must be a Tuple");
    }
}

assertTypeError(x => (() => Tuple.prototype.toSorted.call(x)));

assert.sameValue(Tuple.prototype.toSpliced.call(Object(myFish), 2, 0, 'drum'),
         #['angel', 'clown', 'drum', 'mandarin', 'sturgeon']);
assertTypeError(thisVal => (() => Tuple.prototype.toSpliced.call(thisVal, 2, 0, 'drum')));

assert.sameValue(Tuple.prototype.concat.call(Object(#[1,2,3]), 1,2,3,4,5,6), #[1,2,3,1,2,3,4,5,6]);
assert.sameValue(Tuple.prototype.concat.call(Object(#[1,2,3]), 1,2,Object(#[3,4]),5,6), #[1,2,3,1,2,3,4,5,6]);
assertTypeError(thisVal => (() => Tuple.prototype.concat.call(thisVal, 1, 2, 3, 4)));

assert.sameValue(Tuple.prototype.includes.call(Object(#[1,2,3]), 1), true);
assertTypeError(thisVal => (() => Tuple.prototype.concat.includes(thisVal, 1)));

assert.sameValue(Tuple.prototype.indexOf.call(Object(#[1,2,3]), 1), 0);
assertTypeError(thisVal => (() => Tuple.prototype.indexOf.call(thisVal, 0)));

assert.sameValue(Tuple.prototype.lastIndexOf.call(Object(#[1,2,3]), 1), 0);
assertTypeError(thisVal => (() => Tuple.prototype.lastIndexOf.call(thisVal, 0)));

assert.sameValue(Tuple.prototype.slice.call(Object(#[1,2,3]), 1), #[2,3]);
assertTypeError(thisVal => (() => Tuple.prototype.slice.call(thisVal, 0)));

var pred = x => x > 2;

assert.sameValue(Tuple.prototype.every.call(Object(#[1,2,3]), pred), false);
assertTypeError(thisVal => (() => Tuple.prototype.every.call(thisVal, pred)));

assert.sameValue(Tuple.prototype.filter.call(Object(#[1,2,3]), pred), #[3]);
assertTypeError(thisVal => (() => Tuple.prototype.filter.call(thisVal, pred)));

assert.sameValue(Tuple.prototype.find.call(Object(#[1,2,3]), pred), 3);
assertTypeError(thisVal => (() => Tuple.prototype.find.call(thisVal, pred)));

assert.sameValue(Tuple.prototype.findIndex.call(Object(#[1,2,3]), pred), 2);
assertTypeError(thisVal => (() => Tuple.prototype.findIndex.call(thisVal, pred)));

assert.sameValue(Tuple.prototype.some.call(Object(#[1,2,3]), pred), true);
assertTypeError(thisVal => (() => Tuple.prototype.some.call(thisVal, pred)));

var a = 0;
var f = (x => a += x);
assert.sameValue(Tuple.prototype.forEach.call(Object(#[1,2,3]), f), undefined);
assert.sameValue(a, 6);
assertTypeError(thisVal => (() => Tuple.prototype.forEach.call(thisVal, f)));

f = (x => x+1);
assert.sameValue(Tuple.prototype.map.call(Object(#[1,2,3]), f), #[2,3,4]);
assertTypeError(thisVal => (() => Tuple.prototype.map.call(thisVal, f)));

f = (x => #[x,x+1]);
assert.sameValue(Tuple.prototype.flatMap.call(Object(#[1,2,3]), f), #[1,2,2,3,3,4]);
assertTypeError(thisVal => (() => Tuple.prototype.flatMap.call(thisVal, f)));

assert.sameValue(Tuple.prototype.reduce.call(Object(#[1,2,3]), add), 6);
assertTypeError(thisVal => (() => Tuple.prototype.reduce.call(thisVal, add)));

assert.sameValue(Tuple.prototype.reduceRight.call(Object(#[1,2,3]), sub), 0);
assertTypeError(thisVal => (() => Tuple.prototype.reduce.call(thisVal, sub)));

