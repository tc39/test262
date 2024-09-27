// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Symbol-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// JSON.stringify ignores symbol-keyed properties, even enumerable ones.

var obj = {a: 1};
obj[Symbol.for("ponies")] = {toJSON: function () { throw "fit"; }};
obj[Symbol.iterator] = {toJSON: function () { throw "fit"; }};
assert.sameValue(JSON.stringify(obj), '{"a":1}');

var replacer = function (k, v) {
    if (typeof k === "symbol")
        throw "fit";
    return v;
};
assert.sameValue(JSON.stringify(obj, replacer), '{"a":1}');

