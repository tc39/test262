// Copyright (C) 2017 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-regexp.prototype.flags
description: Boolean coercion of properties
info: >
  get RegExp.prototype.flags

  [...]
  4. Let global be ToBoolean(? Get(R, "global")).
features: [Symbol, regexp-dotall]
---*/

var get = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
var flags = [
  ['g', 'global'],
  ['i', 'ignoreCase'],
  ['m', 'multiline'],
  ['s', 'dotAll'],
  ['u', 'unicode'],
  ['y', 'sticky'],
];

flags.forEach(function(flag) {
  var res = flag[0];
  var key = flag[1];
  var r = {};

  r[key] = undefined;
  assert.sameValue(get.call(r), '', key + ' = undefined');

  r[key] = null;
  assert.sameValue(get.call(r), '', key + ' = null');

  r[key] = NaN;
  assert.sameValue(get.call(r), '', key + ' = NaN');

  r[key] = '';
  assert.sameValue(get.call(r), '', key + ' = ""');

  r[key] = 'string';
  assert.sameValue(get.call(r), res, key + ' = "string"');

  r[key] = 86;
  assert.sameValue(get.call(r), res, key + ' = 86');

  r[key] = Symbol();
  assert.sameValue(get.call(r), res, key + ' = Symbol()');

  r[key] = [];
  assert.sameValue(get.call(r), res, key + ' = []');

  r[key] = {};
  assert.sameValue(get.call(r), res, key + ' = {}');
});
