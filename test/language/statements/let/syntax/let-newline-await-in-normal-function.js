// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Jeff Walden <jwalden+code@mit.edu>
esid: sec-let-and-const-declarations
description: >
  `await` must be considered a permissible binding name in LexicalDeclaration as
  used in non-async functions.
info: >
  LexicalDeclaration is parametrized to indicate whether `async` is permitted as
  binding name.  In non-async functions `await` is a perfectly cromulent binding
  name.  Therefore ASI can't apply between `let` (where a LexicalDeclaration is
  permitted) and `await`, so a subsequent `0` where `=` was expected is a syntax
  error.
negative:
  phase: early
  type: SyntaxError
---*/

function f() {
    let
    await 0;
}
