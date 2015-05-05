// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It's a redeclaration error to have multiple let statements with
    same identifier inside a switch statement
flags: [negative]
---*/

let i = 1;
switch(i) {
    case 1:
        let a = 1;
        break;
    case 2:
        let a = 2;
        break;
}
