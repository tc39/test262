// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Arguments : (ArgumentList : ArgumentList,, AssignmentExpression) is a bad
    syntax
description: incorrect syntax
flags: [negative]
---*/

function f_arg() {
}

f_arg(1,,2);
