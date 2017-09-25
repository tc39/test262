// Copyright (c) 2017 Valerie Young.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: Behavoir when "this" value is a boolean.
---*/

var trimStart = String.prototype.trimStart

assert.sameValue(
    trimStart.call(true),
    'true',
    'String.prototype.trimStart.call(true)'
);

assert.sameValue(
    String.prototype.trimStart.call(false),
    'false',
    'String.prototype.trimStart.call(false)'
);
