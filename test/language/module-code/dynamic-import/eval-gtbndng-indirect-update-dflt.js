// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Modifications to default binding that occur after dependency has been
    evaluated are reflected in local binding
info: |
    8.1.1.5.1 GetBindingValue (N, S)

    [...]
    3. If the binding for N is an indirect binding, then
       a. Let M and N2 be the indirection values provided when this binding for
          N was created.
       b. Let targetEnv be M.[[Environment]].
       c. If targetEnv is undefined, throw a ReferenceError exception.
       d. Let targetER be targetEnv's EnvironmentRecord.
       e. Return ? targetER.GetBindingValue(N2, S).
flags: [async, module]
features: [dynamic-import]
---*/

import('./eval-gtbndng-indirect-update-dflt_FIXTURE.js').then(imported => {
  assert.sameValue(imported.default(), 1);
  assert.sameValue(imported.default, 2);
}).then($DONE, $DONE).catch($DONE);
