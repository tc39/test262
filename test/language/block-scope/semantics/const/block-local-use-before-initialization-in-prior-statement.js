// Copyright (C) Copyright 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    const: block local use before initialization in prior statement.
    (TDZ, Temporal Dead Zone)
negative: ReferenceError
---*/
{
  x; const x = 1;
}
