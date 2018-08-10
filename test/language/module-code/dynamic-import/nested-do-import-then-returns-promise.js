// This file was procedurally generated from the following sources:
// - src/dynamic-import/returns-promise.case
// - src/dynamic-import/default/nested-do.template
/*---
description: Dynamic import() returns a Promise object. (nested do)
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

---*/

let x = 0;
do {
  x++;
  import('./dynamic-import-module_FIXTURE.js').then(imported => {

    assert.sameValue(imported.x, 1);

  }).then($DONE, $DONE).catch($DONE);
} while (!x);
