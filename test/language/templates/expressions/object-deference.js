// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 12.2.8
description: >
    Expressions should be evaluated and converted to Stings accordingto the
    ToString abstract operation.
---*/
var object = {
  number: 5,
  string: 'stringValue'
};

assert.sameValue(
  `foo ${object.number} bar`, 'foo 5 bar', 'number value property'
);
assert.sameValue(
  `foo ${object.string} bar`, 'foo stringValue bar', 'string value property'
);
