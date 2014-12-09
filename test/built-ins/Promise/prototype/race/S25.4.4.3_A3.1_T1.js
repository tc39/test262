// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.race throws on invalid 'this'
    Note: must have at least one element in array, or else Promise.race
    never exercises the code that throws
author: Sam Mikes
description: Promise.race throws if 'this' does not conform to Promise constructor
negative: TypeError
---*/

function ZeroArgConstructor() {
}

Promise.race.call(ZeroArgConstructor, [3]);
