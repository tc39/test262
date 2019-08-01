// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: |
    If Result(3).type is normal and its completion value is empty,
    then return the value undefined
esid: sec-performeval
description: do-while statement
---*/

assert.sameValue((0,eval)("do ; while(false)"), undefined);
