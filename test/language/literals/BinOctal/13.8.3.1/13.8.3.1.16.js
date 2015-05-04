// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Unary operators
---*/

a = -0b1000;
if (a != -8) {
    $ERROR("Variable is expected to have the value -8 for -0b1000 but got " + a);
}

a = +0b1000;
if (a != 8) {
    $ERROR("Variable is expected to have the value +8 for +0b1000 but got " + a);
}

a = ~0b1000;
if (a != -9) {
    $ERROR("Variable is expected to have the value -9 for ~0b1000 but got " + a);
}

a = -0o10;
if (a != -8) {
    $ERROR("Variable is expected to have the value -8 for -0o10 but got " + a);
}

a = +0o10;
if (a != 8) {
    $ERROR("Variable is expected to have the value +8 for +0o10 but got " + a);
}

a = ~0o10;
if (a != -9) {
    $ERROR("Variable is expected to have the value -9 for ~0o10 but got " + a);
}
