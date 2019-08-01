// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.togmtstring
description: Value of `Date.prototype.toGMTString`
info: |
    The function object that is the initial value of Date.prototype.toGMTString
    is the same function object that is the initial value of
    Date.prototype.toUTCString.
---*/

assert.sameValue(Date.prototype.toGMTString, Date.prototype.toUTCString);
