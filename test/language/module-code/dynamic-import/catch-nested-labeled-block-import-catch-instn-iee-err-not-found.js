// This file was procedurally generated from the following sources:
// - src/dynamic-import/instn-iee-err-not-found.case
// - src/dynamic-import/catch/nested-labeled-block.template
/*---
description: IndirectExportEntries validation - undefined imported bindings (nested labeled block)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated, async, module]
info: |
    ImportCall :
        import( AssignmentExpression )

    1. Let referencingScriptOrModule be ! GetActiveScriptOrModule().
    2. Assert: referencingScriptOrModule is a Script Record or Module Record (i.e. is not null).
    3. Let argRef be the result of evaluating AssignmentExpression.
    4. Let specifier be ? GetValue(argRef).
    5. Let promiseCapability be ! NewPromiseCapability(%Promise%).
    6. Let specifierString be ToString(specifier).
    7. IfAbruptRejectPromise(specifierString, promiseCapability).
    8. Perform ! HostImportModuleDynamically(referencingScriptOrModule, specifierString, promiseCapability).
    9. Return promiseCapability.[[Promise]].


    [...]
    9. For each ExportEntry Record e in module.[[IndirectExportEntries]], do
       a. Let resolution be ? module.ResolveExport(e.[[ExportName]], « », « »).
       b. If resolution is null or resolution is "ambiguous", throw a
          SyntaxError exception.
    [...]

    15.2.1.16.3 ResolveExport

    [...]
    9. Let starResolution be null.
    10. For each ExportEntry Record e in module.[[StarExportEntries]], do
        [...]
    11. Return starResolution.

---*/

{
  import('./instn-iee-err-not-found-empty_FIXTURE.js').catch(error => {

    assert.sameValue(error.name, 'SyntaxError');

  }).then($DONE, $DONE);
};
