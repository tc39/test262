// Copyright (C) 2017 Aleksey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-regexp.prototype.flags
description: `flags` returns RegExp flags as a string
info: |
  1. Let R be the this value.
  2. If Type(R) is not Object, throw a TypeError exception.
features: [regexp-dotall]
---*/

assert.sameValue(/./.flags, '', 'no flags');
assert.sameValue(/./g.flags, 'g', 'global');
assert.sameValue(/./i.flags, 'i', 'ignoreCase');
assert.sameValue(/./m.flags, 'm', 'multiline');
assert.sameValue(/./s.flags, 's', 'dotAll');
assert.sameValue(/./u.flags, 'u', 'unicode');
assert.sameValue(/./y.flags, 'y', 'sticky');
