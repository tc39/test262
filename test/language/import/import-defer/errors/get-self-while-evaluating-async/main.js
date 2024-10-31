// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver-EnsureDeferredNamespaceEvaluation
description: >
  Modules cannot try to trigger their own evaluation
info: |
  10.4.6.8 [[Get]] ( _P_, _Receiver_ )
    1. ...
    1. If _O_.[[Deferred]] is **true**, perform ? EnsureDeferredNamespaceEvaluation(_O_).
    1. ...

  EnsureDeferredNamespaceEvaluation ( _O_ )
    1. Assert: _O_.[[Deferred]] is *false*.
    1. Let _m_ be _O_.[[Module]].
    1. If _m_ is a Cyclic Module Record, _m_.[[Status]] is not ~evaluated~, and ReadyForSyncExecution(_m_) is *false*, throw a *TypeError* exception.
    1. ...

  ReadyForSyncExecution( _module_, _seen_ )
    1. If _seen_ is not provided, let _seen_ be a new empty List.
    1. If _seen_ contains _module_, return *true*.
    1. Append _module_ to _seen_.
    1. If _module_.[[Status]] is ~evaluated~, return *true*.
    1. If _module_.[[Status]] is ~evaluating~ or ~evaluating-async~, return *false*.
    1. ...

flags: [module, async]
features: [import-defer, top-level-await]
---*/

import defer * as ns from "./dep_FIXTURE.js";

assert(globalThis["error on ns.foo"] instanceof TypeError, "ns.foo while evaluating throws a TypeError");

ns.foo;

$DONE();
