// This file was procedurally generated from the following sources:
// - src/dynamic-import/empty-args-early-error.case
// - src/dynamic-import/syntax/top-level.template
/*---
description: It's a SyntaxError if AssignmentExpression is omitted (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated, module]
negative:
  phase: parse
  type: SyntaxError
info: |
    ImportCall :
        import( AssignmentExpression )


    ImportCall :
        import()

---*/
throw "Test262: This statement should not be evaluated.";

import();

/* The params region intentionally empty */
