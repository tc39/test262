// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise prototype.catch is a function
author: Sam Mikes
description: Promise.prototype.catch is a function
---*/

if (!(Promise.prototype.catch instanceof Function)) {
    $ERROR("Expected Promise.prototype.catch to be a function");
}
