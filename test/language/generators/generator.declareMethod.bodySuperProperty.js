// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod can reference SuperProperty in body
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod body uses SuperProperty (allowed)
---*/

var obj = {
    *foo(a) {
        yield super.x;
    }
};
