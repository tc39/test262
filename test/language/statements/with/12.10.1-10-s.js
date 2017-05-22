// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-10-s
description: >
    with statement in strict mode is allowed
---*/

    eval("\
          var o = {};\
          with (o) {}\
       ");
