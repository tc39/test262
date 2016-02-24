// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Module code is always strict mode code.
es6id: 10.2.1
id: sec-strict-mode-code
flags: [module]
negative: SyntaxError
---*/

$ERROR('This statement should not be executed.');
var public;
