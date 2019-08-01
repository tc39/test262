// Copyright (c) 2018 Mike Pennisi.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-variable-statement
description: >
  arguments as local var identifier is allowed within a function declaration
flags: [noStrict]
---*/

function f() {
  var arguments;
}
