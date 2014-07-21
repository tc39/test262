// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Let O be the result of calling ToObject passing the this value as
    the argument.
flags: [negative]
---*/

Object.prototype.toLocaleString.call(null);
