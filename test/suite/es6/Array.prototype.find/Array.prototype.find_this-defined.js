// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: thisArg should be bound to this if provided
flags: [path]
---*/

var globalThis = this;

[1].find(function () {
    if (this !== Array) {
      $ERROR('#1: this !== Array');
    }
    if (this === globalThis) {
      $ERROR('#2: this === globalThis. Should be Array');
    }
}, Array);
