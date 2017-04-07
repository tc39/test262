// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Jeff Walden <jwalden+code@mit.edu>
esid: sec-let-and-const-declarations
description: >
  `await` must not be considered a permissible binding name in
  LexicalDeclaration as used in async functions.
info: >
  LexicalDeclaration is parametrized to indicate whether `async` is permitted as
  binding name.  In async functions `await` is excluded from LexicalDeclaration
  as a binding name.  Therefore ASI *can* apply between `let` (where a
  LexicalDeclaration is permitted) and `await`, so a subsequent `0` forms part
  of an AwaitExpression and there is no syntax error.
---*/

async function f() {
    let
    await 0;
}

assert(f instanceof Function);
