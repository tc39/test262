// Copyright (C) 2017 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-regexp.prototype.flags
description: Rethrows exceptions raised in property gets
info: >
  get RegExp.prototype.flags

  [...]
  4. Let global be ToBoolean(? Get(R, "global")).
features: [regexp-dotall]
---*/

var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;

assert.throws(Test262Error, function() {
  get.call({
    get global() {
      throw new Test262Error();
    },
  });
}, 'global');

assert.throws(Test262Error, function() {
  get.call({
    get ignoreCase() {
      throw new Test262Error();
    },
  });
}, 'ignoreCase');

assert.throws(Test262Error, function() {
  get.call({
    get multiline() {
      throw new Test262Error();
    },
  });
}, 'multiline');

assert.throws(Test262Error, function() {
  get.call({
    get dotAll() {
      throw new Test262Error();
    },
  });
}, 'dotAll');

assert.throws(Test262Error, function() {
  get.call({
    get unicode() {
      throw new Test262Error();
    },
  });
}, 'unicode');

assert.throws(Test262Error, function() {
  get.call({
    get sticky() {
      throw new Test262Error();
    },
  });
}, 'sticky');
