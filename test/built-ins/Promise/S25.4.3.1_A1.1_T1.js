// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise is the Promise property of the global object
author: Sam Mikes
description: Promise === global.Promise
includes: [fnGlobalObject.js]
---*/

var global = fnGlobalObject();

if (Promise !== global.Promise) {
    $ERROR("Expected Promise === global.Promise.");
}
