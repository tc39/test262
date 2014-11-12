// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all should throw if 'this' does not conform to Promise constructor
negative: TypeError
description: this must conform to Promise constructor in Promise.all
author: Sam Mikes
---*/

function ZeroArgConstructor() {
}

Promise.all.call(ZeroArgConstructor, []);
