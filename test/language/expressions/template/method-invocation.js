// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8
description: >
    Expressions should be evaluated and converted to Strings according to the
    ToString abstract operation.
---*/
var object = {
  fn: function() { return 'result'; }
};

assert.sameValue(`foo ${object.fn()} bar`, 'foo result bar');
