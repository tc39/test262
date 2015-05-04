// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Invoke spread on the arguement list
---*/

var expectedArgsForBar = [2, 3, 4];
function bar(...args) {
    if (args.length !== expectedArgsForBar.length) {
        $ERROR("bar method is expected to receive " + expectedArgsForBar.length + " arguments");
    }
    for (i = 0; i < expectedArgsForBar.length; i++) {
        if (args[i] !== expectedArgsForBar[i]) {
            $ERROR("bar method received an unexpected argument");
        }
    }
}

var expectedArgsForFoo = [3, 4];
function foo(a, b = bar(...expectedArgsForBar), ...args) {
    if (args.length !== expectedArgsForFoo.length) {
        $ERROR("foo method is expected to receive " + expectedArgsForFoo.length + " arguments");
    }
    for (i = 0; i < expectedArgsForFoo.length; i++) {
        if (args[i] !== expectedArgsForFoo[i]) {
            $ERROR("foo method received an unexpected argument");
        }
    }
}

foo(1, 2, 3, 4);
