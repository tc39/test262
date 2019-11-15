// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  A RegExp searchValue's Symbol.replace can be called instead of the next steps of replaceAll
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  1. Let O be RequireObjectCoercible(this value).
  2. If searchValue is neither undefined nor null, then
    a. Let isRegExp be ? IsRegExp(searchString).
    b. If isRegExp is true, then
      i. Let flags be ? Get(searchValue, "flags").
      ii. Perform ? RequireObjectCoercible(flags).
      iii. If ? ToString(flags) does not contain "g", throw a TypeError exception.
    c. Let replacer be ? GetMethod(searchValue, @@replace).
    d. If replacer is not undefined, then
      i. Return ? Call(replacer, searchValue, « O, replaceValue »).
  3. Let string be ? ToString(O).
  4. Let searchString be ? ToString(searchValue).
  ...
features: [String.prototype.replaceAll, Symbol.replace, class]
---*/

let called = 0;

class RE extends RegExp {
  [Symbol.replace](...args) {
    const actual = super[Symbol.replace](...args);

    // Ordering is intentional to observe call from super
    called += 1;
    return actual;
  }

  toString() {
    throw 'Should not call toString on searchValue';
  }
}

const samples = [
  [ ['b', 'g'], 'abc abc abc', 'z', 'azc azc azc' ],
  [ ['b', 'gy'], 'abc abc abc', 'z', 'abc abc abc' ],
  [ ['b', 'giy'], 'abc abc abc', 'z', 'abc abc abc' ],
  [ ['[A-Z]', 'g'], 'No Uppercase!', '', 'o ppercase!'],
  [ ['[A-Z]', 'gy'], 'No Uppercase?', '', 'o Uppercase?'],
  [ ['[A-Z]', 'gy'], 'NO UPPERCASE!', '', ' UPPERCASE!'],
];

let count = 0;
for (const [ reArgs, thisValue, replaceValue, expected ] of samples) {
  const searchValue = new RE(...reArgs);

  called = 0;
  const actual = thisValue.replaceAll(searchValue, replaceValue);

  assert.sameValue(called, 1, `sample ${count}`);
  assert.sameValue(actual, expected, `sample ${count}`);
  count += 1;
}
