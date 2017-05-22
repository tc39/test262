// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-1-s
description: with statement in strict mode does not throw SyntaxError (strict function)
---*/


    eval("\
          function f() {\
            \'use strict\';\
            var o = {}; \
            with (o) {};\
          }\
        ");
