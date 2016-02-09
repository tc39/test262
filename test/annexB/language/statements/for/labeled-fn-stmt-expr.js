// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: It is a Syntax Error if IsLabelledFunction(Statement) is true.
negative: SyntaxError
id: sec-labelled-function-declarations
es6id: B.3.2
---*/

for ( ; false; ) label1: label2: function f() {}
