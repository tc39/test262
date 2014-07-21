// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Let O be the result of calling ToObject passing the this value as the
    argument.
description: Checking Object.prototype.valueOf invoked by the 'call' property.
flags: [negative]
---*/

Object.prototype.valueOf.call(undefined);
