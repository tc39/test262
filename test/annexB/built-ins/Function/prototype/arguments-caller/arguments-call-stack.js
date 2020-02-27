// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    The result of func.arguments is based on execution context stack.
flags: [noStrict]
---*/



function f(rec) {
    if (rec === 'inner') {
        assert(f.arguments[0] === 'inner')
    }
    else if (rec === 'outer') {
        assert(f.arguments[0] === 'outer')
        f('inner')
        assert(f.arguments[0] === 'outer')
    }
    else {
        assert(false)
    }
}

function g() {
    assert(f.arguments === null)
    f('outer')
    assert(f.arguments === null)
}

g()
