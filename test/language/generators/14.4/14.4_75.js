// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    14.4.14 - If the GeneratorDeclaration is contained in strict code
    or if its FunctionBody is strict code, then let strict be true.
    Otherwise let strict be false.
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var gfoo = function*() {
    var implements = 1;
}
