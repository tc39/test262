// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  preventExtensions on global
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Jan de Mooij
 */

Object.preventExtensions(this);
delete Function;

try {
    /* Don't assert. */
    Object.getOwnPropertyNames(this);
} catch(e) {
    assert.sameValue(true, false, "this shouldn't have thrown");
}
