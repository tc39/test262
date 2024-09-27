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
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

eval("\
  (function(){for(d in[0,Number]) {\
    this.__defineGetter__(\"\",function(){}),\
    [(this.__defineGetter__(\"x\",Math.pow))]\
  }})\
")()
delete gc
eval("\
  (function() {\
    for(e in this.__defineSetter__(\"x\",function(){})){}\
  })\
")()
delete gc

assert.sameValue(true, true, "don't crash");
