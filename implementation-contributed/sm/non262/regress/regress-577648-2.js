// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

var o = { f: function() { return o.g(); }, g: function() { return arguments.callee.caller; } };
var c = o.f();
var i = 'f';
var d = o[i]();

assert.sameValue(true, c === o.f && d === o.f(), "");
