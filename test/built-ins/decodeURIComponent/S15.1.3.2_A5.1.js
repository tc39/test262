// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of decodeURIComponent has the attribute DontEnum
esid: sec-decodeuricomponent-encodeduricomponent
description: Checking use propertyIsEnumerable, for-in
---*/

//CHECK#1
assert.sameValue(decodeURIComponent.propertyIsEnumerable('length'), false, '#1: decodeURIComponent.propertyIsEnumerable(\'length\') === false');

//CHECK#2
var result = true;
for (var p in decodeURIComponent) {
  if (p === "length") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in decodeURIComponent) { if (p === "length") result = false; }  result === true;');
}
