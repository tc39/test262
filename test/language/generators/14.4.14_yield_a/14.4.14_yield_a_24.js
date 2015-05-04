// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield inside eval, inside a generator throws runtime error
author: Nikhil Suryanarayanan
flags: [onlyStrict]
---*/

// Strict Mode
var gfoo = function *() {
    eval("yield");
}
try{
    gfoo().next();
    $ERROR('eval("yield") in a generator throws runtime error in strict mode');
} catch(e) {}
