// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-resolveexport
description: A deferred re-export forming a cycle with its consumer throws SyntaxError at link time
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
  
  Like we have for ordinary re-exports, circular deferred re-exports also throws SyntaxError.
flags: [module, async]
features: [export-defer, dynamic-import]
includes: [asyncHelpers.js]
---*/

asyncTest(async () => {
  let err;
  await import("./entry_FIXTURE.js").catch((e) => { err = e; });
  assert.sameValue(err instanceof SyntaxError, true, "consumer-cycle throws SyntaxError");
});
