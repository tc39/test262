// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The "implements" token can not be used as identifier in strict code
description: Checking if execution of "implements=1" fails in strict code
flags:
    - onlyStrict
    - negative
---*/

"use strict";

var implements = 1;
