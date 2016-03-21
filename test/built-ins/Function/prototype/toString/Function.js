// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.2.3.5
description: Function.prototype.toString on a function created with the Function constructor
---*/

let f = /* before */Function("a", " /* a */ b, c /* b */ //", "/* c */ ; /* d */ //")/* after */;

assert.sameValue(f.toString(), "function anonymous(a, /* a */ b, c /* b */ //\n) {/* c */ ; /* d */ //\n}");
