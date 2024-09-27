// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-syntax-shell.js
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

//-----------------------------------------------------------------------------
var BUGNUMBER = 1288459;
var summary = "let can't be used as a label in strict mode code";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

Function("let: 42");
Function("l\\u0065t: 42");
assertThrowsInstanceOf(() => Function(" 'use strict'; let: 42"), SyntaxError);
assertThrowsInstanceOf(() => Function(" 'use strict' \n let: 42"), SyntaxError);
assertThrowsInstanceOf(() => Function(" 'use strict'; l\\u0065t: 42"), SyntaxError);
assertThrowsInstanceOf(() => Function(" 'use strict' \n l\\u0065t: 42"), SyntaxError);

eval("let: 42");
eval("l\\u0065t: 42");
assertThrowsInstanceOf(() => eval(" 'use strict'; let: 42"), SyntaxError);
assertThrowsInstanceOf(() => eval(" 'use strict' \n let: 42;"), SyntaxError);
assertThrowsInstanceOf(() => eval(" 'use strict'; l\\u0065t: 42"), SyntaxError);
assertThrowsInstanceOf(() => eval(" 'use strict' \n l\\u0065t: 42;"), SyntaxError);

/******************************************************************************/

print("Tests complete");
