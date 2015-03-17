// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is a valid BindingIdentifier for GeneratorDeclarations outside of
      strict mode.
  es6id: 12.1.1
  flags: [noStrict]
 ---*/

function* yield() { (yield 3) + (yield 4); }
