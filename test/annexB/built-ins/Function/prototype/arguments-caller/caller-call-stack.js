// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    The result of func.caller is based on execution context stack.
flags: [noStrict]
---*/



function f(rec) {
    if (rec === 'inner') {
        assert(f.caller === f)
    }
    else if (rec === 'outer') {
        assert(f.caller === g)
        f('inner')
        assert(f.caller === g)
    }
    else {
        assert(false)
    }
}

function g() {
    assert(f.caller === null)
    f('outer')
    assert(f.caller === null)
}

g()
