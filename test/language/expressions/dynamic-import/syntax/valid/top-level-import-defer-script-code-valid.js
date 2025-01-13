// This file was procedurally generated from the following sources:
// - src/dynamic-import/import-defer-script-code-valid.case
// - src/dynamic-import/syntax/valid/top-level.template
/*---
description: import.defer() can be used in script code (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [import-defer, dynamic-import]
flags: [generated]
info: |
    ImportCall :
        import( AssignmentExpression )

---*/
// This is still valid in script code, and should not be valid for module code
// https://tc39.github.io/ecma262/#sec-scripts-static-semantics-lexicallydeclarednames
var smoosh; function smoosh() {}


import.defer('./empty_FIXTURE.js');
