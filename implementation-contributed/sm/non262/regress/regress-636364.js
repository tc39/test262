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
 * Contributors: Jason Orendorff, Brendan Eich
 */

if (typeof newGlobal == 'function') {
    var gsame = newGlobal('same-compartment');

    gsame.eval("function f() { return this; }");
    f = gsame.f;
    assert.sameValue(f(), gsame);

    gsame.eval("function g() { 'use strict'; return this; }");
    g = gsame.g;
    assert.sameValue(g(), undefined);

    var gnew = newGlobal();

    gnew.eval("function f() { return this; }");
    f = gnew.f;
    assert.sameValue(f(), gnew);

    gnew.eval("function g() { 'use strict'; return this; }");
    g = gnew.g;
    assert.sameValue(g(), undefined);
}

