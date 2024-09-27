// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-reflect-parse-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/function test() {

// global let is var
assertGlobalDecl("let {x:y} = foo;", letDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                                init: ident("foo") }]));
// function-global let is let
assertLocalDecl("let {x:y} = foo;", letDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                               init: ident("foo") }]));
// block-local let is let
assertBlockDecl("let {x:y} = foo;", letDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                               init: ident("foo") }]));

assertDecl("const {x:y} = foo;", constDecl([{ id: objPatt([assignProp("x", ident("y"))]),
                                              init: ident("foo") }]));

}

runtest(test);
