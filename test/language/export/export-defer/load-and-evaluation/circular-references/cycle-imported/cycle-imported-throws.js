// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-resolveexport
description: Cyclic deferred re-exports of the same binding throw SyntaxError when the binding is imported
info: |
  ResolveExport ( exportName [ , resolveSet [ , deferNamespaceExportSet ] ] )
    1. Assert: module.[[Status]] is not NEW.
    1. If resolveSet is not present, set resolveSet to a new empty List.
    1. If deferNamespaceExportSet is not present, set deferNamespaceExportSet to a new empty List.
    1. For each Record { [[Module]], [[ExportName]] } r of resolveSet, do
       1. If module and r.[[Module]] are the same Module Record and exportName is r.[[ExportName]], then
          1. Assert: This is a circular import request.
          1. Return null.
    1. ...
flags: [module, async]
features: [export-defer, dynamic-import]
includes: [asyncHelpers.js]
---*/

asyncTest(async () => {
  let err;
  await import("./consumer_FIXTURE.js").catch((e) => { err = e; });
  assert.sameValue(err instanceof SyntaxError, true, "cyclic deferred re-exports throw SyntaxError when imported");
});
