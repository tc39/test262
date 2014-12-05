// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.constructor is the Promise constructor
author: Sam Mikes
description: Promise.prototype.constructor is the Promise constructor
---*/

if (Promise.prototype.constructor !== Promise) {
    $ERROR("Expected Promise.prototype.constructor to be Promise");
}

