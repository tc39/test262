// This file was procedurally generated from the following sources:
// - src/declarations/redeclare-with-const-declaration.case
// - src/declarations/redeclare/switch-attempt-to-redeclare-let-declaration.template
/*---
description: redeclaration with const-LexicalDeclaration (LexicalDeclaration (let) in SwitchStatement)
esid: sec-switch-statement-static-semantics-early-errors
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    SwitchStatement : switch ( Expression ) CaseBlock

    It is a Syntax Error if the LexicallyDeclaredNames of CaseBlock contains any
    duplicate entries.

---*/


throw "Test262: This statement should not be evaluated.";

switch (0) { case 1: let f; default: const f = 0; }
