// This file was procedurally generated from the following sources:
// - src/class-fields/static-private-fields-forbidden.case
// - src/class-fields/propname-error-static/cls-decl-static-literal-name.template
/*---
description: static private class fields forbidden (early error -- static ClassElementName)
features: [class, class-fields-private]
flags: [generated]
negative:
  phase: early
  type: SyntaxError
---*/


throw "Test262: This statement should not be evaluated.";

class C {
  static #field;
}
