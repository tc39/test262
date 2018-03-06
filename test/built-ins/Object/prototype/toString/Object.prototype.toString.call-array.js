// Copyright 2018 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.prototype.tostring
description: Let isArray be ? IsArray(O). If isArray is true, let builtinTag be "Array".
---*/
assert.sameValue(Object.prototype.toString.call([]), "[object Array]");
assert.sameValue(Object.prototype.toString.call(Object([])), "[object Array]");
assert.sameValue(Object.prototype.toString.call(Array()), "[object Array]");
assert.sameValue(Object.prototype.toString.call(Object(Array())), "[object Array]");
assert.sameValue(Object.prototype.toString.call(Object(new Array())), "[object Array]");
