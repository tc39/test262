// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.11.7
description: >
    Statement completion value when body returns an empty abrupt completion
info: >
    WithStatement : with ( Expression ) Statement

    [...]
    8. Let C be the result of evaluating Statement.
    9. Set the running execution context’s Lexical Environment to oldEnv.
    10. If C.[[type]] is normal and C.[[value]] is empty, return
        NormalCompletion(undefined).
flags: [noStrict]
---*/

assert.sameValue(
  eval('1; do { 2; with({}) { 3; break; } 4; } while (false);'), 3
);
assert.sameValue(
  eval('5; do { 6; with({}) { break; } 7; } while (false);'), 6
);

assert.sameValue(
  eval('8; do { 9; with({}) { 10; continue; } 11; } while (false)'), 10
);
assert.sameValue(
  eval('12; do { 13; with({}) { continue; } 14; } while (false)'), 13
);
