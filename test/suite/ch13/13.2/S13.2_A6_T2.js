// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.2_A6_T2
description: >
    check if "arguments" poisoning poisons  getOwnPropertyDescriptor
    too
flags: [onlyStrict]
---*/

"use strict";
Object.getOwnPropertyDescriptor(function(){}, 'arguments');
