// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-identifiers
description: The restriction on `await` as a BindingIdentifier does not cross function boundaries
info: |
  BindingIdentifier : Identifier

  [...]
  - It is a Syntax Error if the code matched by this production is nested,
    directly or indirectly (but not crossing function or static initialization
    block boundaries), within a ClassStaticBlock and the StringValue of
    Identifier is "await".
features: [class-static-block]
---*/

class C {
  static {
    (() => { const await = 0; });
  }
}
