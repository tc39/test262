// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise prototype object is an ordinary object
author: Sam Mikes
description: Promise prototype is a standard built-in Object
---*/

if (!(Promise.prototype instanceof Object)) {
    $ERROR("Expected Promise.prototype to be an Object");
}

