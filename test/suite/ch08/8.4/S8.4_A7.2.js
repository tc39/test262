// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: <CR> between chunks of one string not allowed
description: Insert <CR> between chunks of one string
flags: [negative]
---*/

eval("var x = asdf\u000Dghjk");
