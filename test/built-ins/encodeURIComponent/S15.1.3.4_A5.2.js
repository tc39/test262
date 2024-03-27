// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The length property of encodeURIComponent does not have the attribute
    DontDelete
esid: sec-encodeuricomponent-uricomponent
description: Checking use hasOwnProperty, delete
---*/

//CHECK#1
assert.sameValue(encodeURIComponent.hasOwnProperty('length'), true, '#1: encodeURIComponent.hasOwnProperty(\'length\') === true');

delete encodeURIComponent.length;

//CHECK#2
assert.sameValue(encodeURIComponent.hasOwnProperty('length'), false, '#2: delete encodeURIComponent.length; encodeURIComponent.hasOwnProperty(\'length\') === false');

//CHECK#3
if (encodeURIComponent.length === undefined) {
  throw new Test262Error('#3: delete encodeURIComponent.length; encodeURIComponent.length !== undefined');
}
