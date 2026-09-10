// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    func.arguments evaluates to a new object which is not mapped to the actual arguments.
flags: [noStrict]
---*/



function f(x, y, z) {

    assert(f.arguments !== arguments)

    x = 42

    assert(f.arguments.length === 2)
    assert(f.arguments[0] === 'a')
    assert(f.arguments[1] === 'b')

    f.arguments[1] = "pwnd"
    assert(y === 'b')
    assert(arguments[1] === 'b')

    assert(f.arguments !== f.arguments)

}

f('a', 'b')
