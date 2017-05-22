// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-3-s
description: >
    with statement in strict mode does not throw SyntaxError (nested strict
    function)
---*/


    eval("\
            function foo() {\
                function f() {\
                  \'use strict\'; \
                  var o = {}; \
                  with (o) {};\
                }\
              }\
        ");
