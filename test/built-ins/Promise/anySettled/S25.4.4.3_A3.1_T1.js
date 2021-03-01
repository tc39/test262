// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
    Promise.anySettled throws on invalid 'this'
    Note: must have at least one element in array, or else Promise.anySettled
    never exercises the code that throws
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled throws if 'this' does not conform to Promise constructor
features: [Promise.anySettled]
---*/

function ZeroArgConstructor() {}

assert.throws(TypeError, function() {
  Promise.anySettled.call(ZeroArgConstructor, [3]);
});
