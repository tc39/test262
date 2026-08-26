// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-initializeboundname
description: >
  In strict mode code, re-resolve unresolvable references on the global in PutValue.
info: |
  via sec-putvalue

  If IsUnresolvableReference(V) is true, then
    If IsStrictReference(V) is true, then
      Let realm be the current Realm Record.
      Set V to ? ResolveBinding(realm.[[GlobalEnv]], name).
      Assert: IsStrictReference(V) is true.
      If IsUnresolvableReference(V) is true, throw a ReferenceError exception.

flags: [onlyStrict]
---*/

undeclared = (globalThis.undeclared = 5);
