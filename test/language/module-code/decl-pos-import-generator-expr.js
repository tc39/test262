// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Expression cannot contain an `import` declaration
id: sec-modules
negative: SyntaxError
flags: [module]
---*/

(function*() { import v from './decl-pos-import-generator-expr.js'; });
