// Copyright (C) 2017 Lucas Azzola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: try/catch syntax with omission of the catch binding
features: [optional-catch-binding]
info: |
  Optional Catch Binding

  Catch[Yield, Await, Return]:
    (...)
    catch Block[?Yield, ?Await, ?Return]
---*/

try {} catch {}

try {} catch {} finally {}
