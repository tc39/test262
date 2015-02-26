// Copyright (C) Copyright 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    for declaration:
    missing identifier, "let" disallowed as bound name
negative: SyntaxError
---*/
for (let in {}) { }

