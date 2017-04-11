// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-async-function-definitions-static-semantics-early-errors
description: async methods may not be named 'function' in an object literal
info: >
    AsyncMethod : `async` [no LineTerminator here] PropertyName `(` UniqueFormalParameters `)` `{` AsyncFunctionBody `}`

    It is a Syntax Error if the StringValue of |PropertyName| is `"function"`.

negative:
  phase: early
  type: SyntaxError
---*/

({
  async function() {}
})
