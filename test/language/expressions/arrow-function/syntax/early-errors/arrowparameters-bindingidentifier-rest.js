// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.2
description: >
    ArrowParameters : BindingIdentifier[?Yield]

    Includes ...rest

negative:
  stage: early
  type: SyntaxError
---*/
var af = ...x => x;
