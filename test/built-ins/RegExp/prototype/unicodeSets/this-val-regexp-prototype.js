// Copyright (C) 2022 Mathias Bynens, Ron Buckton, and the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-regexp.prototype.unicodeSets
description: >
  Return value of `undefined` when the "this" value is the RegExp prototype
  object
info: |
  get RegExp.prototype.unicodeSets -> RegExpHasFlag

  1. Let R be the this value.
  2. If Type(R) is not Object, throw a TypeError exception.
  3. If R does not have an [[OriginalFlags]] internal slot, then
     a. If SameValue(R, %RegExpPrototype%) is true, return undefined.
features: [regexp-v-flag]
---*/

var get = Object.getOwnPropertyDescriptor(RegExp.prototype, "unicodeSets").get;

assert.sameValue(get.call(RegExp.prototype), undefined);
