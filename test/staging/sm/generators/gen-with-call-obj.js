// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-generators-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/
var foo;

function* gen() {
    var x = 0;
    foo = function() { return x++; }
    for (var i = 0; i < 10; ++i)
        yield x++;
}

var j = 0;
for (i of gen())
    assert.sameValue(i, j++);

// now mess up the stack

function f1(x) {
    var a, b, c, d, e, f, g;
    return x <= 0 ? 0 : f1(x-1);
}
f1(10);
function f2(x) {
    var a = x, b = x;
    return x <= 0 ? 0 : f2(x-1);
}
f2(10);

// now observe gen's call object (which should have been put)

gc();
assert.sameValue(foo(), 10);
gc();
assert.sameValue(foo(), 11);
gc();
assert.sameValue(foo(), 12);

