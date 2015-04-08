// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod can reference SuperProperty in arg
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod uses SuperProperty (allowed)
features: [ default-arg, generator, super ]
---*/

var obj = {
    *foo(a = super.x) {
        yield;
    }
};
