// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then is a function of two arguments
author: Sam Mikes
description: Promise.prototype.then is a function of two arguments
---*/

if (!(Promise.prototype.then instanceof Function)) {
    $ERROR("Expected Promise.prototype.then to be a function");
}

if (Promise.prototype.then.length !== 2) {
    $ERROR("Expected Promise.prototype.then to be a function of two arguments");
}
