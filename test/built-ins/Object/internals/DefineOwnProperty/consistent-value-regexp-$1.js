// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-invariants-of-the-essential-internal-methods
es6id: 6.1.7.3
author: Claude Pache
description: >
  Value of non-writable, non-configurable data property does not change
  ("$1" property of RegExp constructor)
info: |
  [[GetOwnProperty]] (P)

  [...]
  - If a property P is described as a data property with Desc.[[Value]] equal
    to v and Desc.[[Writable]] and Desc.[[Configurable]] are both false, then
    the SameValue must be returned for the Desc.[[Value]] attribute of the
    property on all future calls to [[GetOwnProperty]] ( P ).
  [...]

  (This invariant was violated for the specific property under test by a number
  of implementations as of May 2016.)
---*/

var before, after;

try {
  Object.defineProperty(RegExp, '$1', { writable: false, configurable: false });
} catch (err) {}

before = Object.getOwnPropertyDescriptor(RegExp, '$1');

if (before.writable === false && before.configurable === false) {
  /(.)/.test('.');

  after = Object.getOwnPropertyDescriptor(RegExp, '$1');

  assert.sameValue(before.value, after.value);
}
