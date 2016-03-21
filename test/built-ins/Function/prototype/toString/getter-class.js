// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.2.3.5
description: Function.prototype.toString on a getter (class)
---*/

let f = Object.getOwnPropertyDescriptor(class { /* before */get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }/* after */ }.prototype, "f").get;
let g = Object.getOwnPropertyDescriptor(class { /* before */get /* a */ [ /* b */ "g" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }/* after */ }.prototype, "g").get;

assert.sameValue(f.toString(), "get /* a */ f /* b */ ( /* c */ ) /* d */ { /* e */ }");
assert.sameValue(g.toString(), "get /* a */ [ /* b */ \"g\" /* c */ ] /* d */ ( /* e */ ) /* f */ { /* g */ }");
