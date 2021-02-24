// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
    Promise.anySettled throws on invalid 'this'
    Note: must have at least one element in array, or else Promise.anySettled
    never exercises the code that throws
es6id: S25.4.4.3_A3.1_T1
author: Sam Mikes
description: Promise.anySettled throws if 'this' does not conform to Promise constructor
---*/

function ZeroArgConstructor() {}

assert.throws(TypeError, function() {
  Promise.anySettled.call(ZeroArgConstructor, [3]);
});
