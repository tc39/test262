// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-super-keyword
es6id: 12.3.5
description: SuperCall should evaluate Arguments prior to checking IsConstructor
info: |
  SuperCall : `super` Arguments

  [...]
  3. Let _func_ be ! GetSuperConstructor().
  4. Let _argList_ be ? ArgumentListEvaluation of |Arguments|.
  5. If IsConstructor(_func_) is *false*, throw a *TypeError* exception.
  [...]
features: [class]
---*/

var evaluatedArg = false;
class C extends Object {
  constructor() {
    super(evaluatedArg = true);
  }
}

Object.setPrototypeOf(C, parseInt);

assert.throws(TypeError, () => {
  new C();
});

assert(evaluatedArg, 'performs ArgumentsListEvaluation');
