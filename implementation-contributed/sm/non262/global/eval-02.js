// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-global-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var a = 9;

function directArg(eval, s) {
    var a = 1;
    return eval(s);
}

function directVar(f, s) {
    var eval = f;
    var a = 1;
    return eval(s);
}

function directWith(obj, s) {
    var f;
    with (obj) {
	f = function () {
	    var a = 1;
	    return eval(s);
	};
    }
    return f();
}

// direct eval, even though 'eval' is an argument
assert.sameValue(directArg(eval, 'a+1'), 2);

// direct eval, even though 'eval' is a var
assert.sameValue(directVar(eval, 'a+1'), 2);

// direct eval, even though 'eval' is found via a with block
assert.sameValue(directWith(this, 'a+1'), 2);
assert.sameValue(directWith({eval: eval, a: -1000}, 'a+1'), 2);

