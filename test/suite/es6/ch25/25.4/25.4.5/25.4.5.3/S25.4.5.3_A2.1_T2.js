// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then expects a Promise as 'this'
author: Sam Mikes
description: Promise.prototype.then throw if 'this' is non-Promise Object
negative: TypeError
---*/

function ZeroArgConstructor() {
}

var z = new ZeroArgConstructor();

Promise.then.call(z, function () {}, function () {});
