// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*//* 18 ECMAScript Standard Built-in Objects
...

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.
*/

assert.sameValue(isConstructor(Tuple.isTuple), false);

assertThrowsInstanceOf(() => new Tuple.isTuple(#[]), TypeError,
                       "new Tuple.isTuple(#[]) throws");

