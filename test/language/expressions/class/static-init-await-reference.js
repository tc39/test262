// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-identifiers
description: The restriction on `await` as a IdentifierReference does not cross function boundaries
info: |
  IdentifierReference : Identifier

  - It is a Syntax Error if the code matched by this production is nested,
    directly or indirectly (but not crossing function or static initialization
    block boundaries), within a ClassStaticBlock and the StringValue of
    Identifier is "arguments" or "await".
features: [class-static-block]
---*/

var await = 0;
var fromParam, fromBody;

class C {
  static {
    new (class {
      constructor(x = fromParam = await) {
        fromBody = await;
      }
    });
  }
}

assert.sameValue(fromParam, 0, 'from parameter');
assert.sameValue(fromBody, 0, 'from body');
