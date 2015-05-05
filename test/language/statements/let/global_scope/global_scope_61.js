// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    A var statement which is used in a for-loop will get hoisted and
    cause a redeclaration error if there is a  let declaration with
    the same identifier in the outer-scope
flags: [negative]
---*/

let i;
for (var i = 1; i > 0; i--) { }
