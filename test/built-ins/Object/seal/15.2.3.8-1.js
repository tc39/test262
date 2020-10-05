// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.seal
description: >
    Object.seal does not throw TypeError if type of first param is
    a number primitive
info: |
  If Type(O) is not Object, return O.
---*/
Object.seal(0);
