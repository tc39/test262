// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The decodeURIComponent property has the attribute DontEnum
esid: sec-decodeuricomponent-encodeduricomponent
description: Checking use propertyIsEnumerable, for-in
---*/

//CHECK#1
assert.sameValue(this.propertyIsEnumerable('decodeURIComponent'), false, '#1: this.propertyIsEnumerable(\'decodeURIComponent\') === false');

//CHECK#2
var result = true;
for (var p in this) {
  if (p === "decodeURIComponent") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in this) { if (p === "decodeURIComponent") result = false; }  result === true;');
}
