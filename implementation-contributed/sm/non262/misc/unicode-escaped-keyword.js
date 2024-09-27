// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-misc-shell.js
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
 */

function throws(code) {
    var type;
    try {
        eval(code);
    } catch (ex) {
        type = ex.name;
    }
    assert.sameValue(type, 'SyntaxError');
}

var s = '\\u0073';
throws('var thi' + s);
throws('switch (' + s + 'witch) {}')
throws('var ' + s + 'witch');

