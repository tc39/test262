// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.3_A14
description: If IsCallable(func) is false, then throw a TypeError exception.
negative: TypeError
---*/

Function.prototype.apply.call(null, {}, []);
