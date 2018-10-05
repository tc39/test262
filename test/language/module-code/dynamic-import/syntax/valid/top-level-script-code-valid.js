// This file was procedurally generated from the following sources:
// - src/dynamic-import/script-code-valid.case
// - src/dynamic-import/syntax/valid/top-level.template
/*---
description: import() can be used in script code (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated]
info: |
    ImportCall :
        import( AssignmentExpression )

---*/
// It is a Syntax Error if ModuleItemList Contains NewTarget
// This is still valid in script code
new.target;


import('./script-code-valid.js');
