// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      BigInt literals may be used as a literal property name in an object
      literal.
  es6id: 12.2.6
---*/

var { 9007199254740991n: it } = { 9007199254740991n: 1 };

assert.sameValue(it, 1, "Destructing the BigInt literal property name returns `1`");
