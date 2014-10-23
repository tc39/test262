// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.reject
author: Sam Mikes
description: Promise.reject throws TypeError for bad 'this'
negative: TypeError
---*/

function ZeroArgConstructor() {
}

Promise.reject.call(ZeroArgConstructor, 4);
