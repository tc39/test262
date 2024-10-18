// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of encodeURI has the attribute DontEnum
esid: sec-encodeuri-uri
description: Checking use propertyIsEnumerable, for-in
---*/

//CHECK#1
assert.sameValue(encodeURI.propertyIsEnumerable('length'), false, '#1: encodeURI.propertyIsEnumerable(\'length\') === false');

//CHECK#2
var result = true;
for (var p in encodeURI) {
  if (p === "length") {
    result = false;
  }
}

if (result !== true) {
  throw new Test262Error('#2: result = true; for (p in encodeURI) { if (p === "length") result = false; }  result === true;');
}
