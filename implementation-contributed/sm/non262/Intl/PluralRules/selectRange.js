// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-PluralRules-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// Any combination returns "other" for "en-US".
{
  let numbers = [0, 0.5, 1.2, 1.5, 1.7, -1, 1, "1", 123456789.123456789, Infinity, -Infinity];

  const weirdCases = [
    NaN,
    "word",
    [0, 2],
    {},
  ];

  for (let type of ["ordinal", "cardinal"]) {
    let pr = new Intl.PluralRules("en-US", {type});
    for (let start of numbers) {
      for (let end of numbers) {
        assert.sameValue(pr.selectRange(start, end), "other");
      }
    }

    for (let c of weirdCases) {
      assertThrowsInstanceOf(() => pr.selectRange(c, 0), RangeError);
      assertThrowsInstanceOf(() => pr.selectRange(0, c), RangeError);
      assertThrowsInstanceOf(() => pr.selectRange(c, c), RangeError);
    }
  }
}

// fr (French) returns different results.
{
  let ordinal = new Intl.PluralRules("fr", {type: "ordinal"});
  let cardinal = new Intl.PluralRules("fr", {type: "cardinal"});

  assert.sameValue(ordinal.selectRange(1, 1), "one");
  assert.sameValue(ordinal.selectRange(0, 1), "other");

  assert.sameValue(cardinal.selectRange(1, 1), "one");
  assert.sameValue(cardinal.selectRange(0, 1), "one");
}

// cy (Cymraeg) can return any combination.
{
  let ordinal = new Intl.PluralRules("cy", {type: "ordinal"});

  assert.sameValue(ordinal.selectRange(0, 0), "other");
  assert.sameValue(ordinal.selectRange(0, 1), "one");
  assert.sameValue(ordinal.selectRange(0, 2), "two");
  assert.sameValue(ordinal.selectRange(0, 3), "few");
  assert.sameValue(ordinal.selectRange(0, 5), "many");
  assert.sameValue(ordinal.selectRange(0, 10), "other");

  assert.sameValue(ordinal.selectRange(1, 1), "other");
  assert.sameValue(ordinal.selectRange(1, 2), "two");
  assert.sameValue(ordinal.selectRange(1, 3), "few");
  assert.sameValue(ordinal.selectRange(1, 5), "many");
  assert.sameValue(ordinal.selectRange(1, 10), "other");

  assert.sameValue(ordinal.selectRange(2, 2), "other");
  assert.sameValue(ordinal.selectRange(2, 3), "few");
  assert.sameValue(ordinal.selectRange(2, 5), "many");
  assert.sameValue(ordinal.selectRange(2, 10), "other");

  assert.sameValue(ordinal.selectRange(3, 3), "other");
  assert.sameValue(ordinal.selectRange(3, 5), "many");
  assert.sameValue(ordinal.selectRange(3, 10), "other");

  assert.sameValue(ordinal.selectRange(5, 5), "other");
  assert.sameValue(ordinal.selectRange(5, 10), "other");

  assert.sameValue(ordinal.selectRange(10, 10), "other");
}

// BigInt inputs aren't allowed.
{
  let pr = new Intl.PluralRules("en-US");

  assertThrowsInstanceOf(() => pr.selectRange(0, 0n), TypeError);
  assertThrowsInstanceOf(() => pr.selectRange(0n, 0), TypeError);
  assertThrowsInstanceOf(() => pr.selectRange(0n, 0n), TypeError);
}

