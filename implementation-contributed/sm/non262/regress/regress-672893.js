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
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function f() {
    return function () { return function () { return function () {
    return function () { return function () { return function () {
    return function () { return function () { return function () {
    return function () { return function () { return function () {
    return function () { return function () { return function (a) {
        var v = a;
	assert.sameValue(v, 42);
	return function() { return v; };
    }; }; }; }; }; }; }; }; }; }; }; }; }; }; };
};

assert.sameValue(f()()()()()()()()()()()()()()()(42)(), 42);

