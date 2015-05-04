// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    A var statement inside a switch will hoist and cause a
    redeclaration error if there is a let statement  in the outer-scope
flags: [negative]
---*/

let i = 1;
switch(i) {
    case 1:
        var i = 2;
}
