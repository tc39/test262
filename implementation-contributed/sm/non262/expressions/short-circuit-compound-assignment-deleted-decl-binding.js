// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-expressions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Test when a declarative binding is deleted.

// ES2020, 8.1.1.1.5 SetMutableBinding ( N, V, S )
//
// 1. ...
// 2. If envRec does not have a binding for N, then
//   a. ...
//   b. Perform envRec.CreateMutableBinding(N, true).
//   c. Perform envRec.InitializeBinding(N, V).
//   d. Return NormalCompletion(empty).
// 3. ...

// AndAssignExpr
{
  let a = 0;

  let f = function() {
    eval("var a = 1;");

    a &&= (delete a, 2);

    assert.sameValue(a, 2);
  }

  f();

  assert.sameValue(a, 0);
}

// OrAssignExpr
{
  let a = 1;

  let f = function() {
    eval("var a = 0;");

    a ||= (delete a, 2);

    assert.sameValue(a, 2);
  }

  f();

  assert.sameValue(a, 1);
}

// CoalesceAssignExpr
{
  let a = undefined;

  let f = function() {
    eval("var a = null;");

    a ??= (delete a, 2);

    assert.sameValue(a, 2);
  }

  f();

  assert.sameValue(a, undefined);
}

