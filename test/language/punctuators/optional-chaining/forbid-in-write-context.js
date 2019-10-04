/*---
esid: pending
info: |
  Optional chaining is forbidden in write contexts such as `a?.b = c`.
  This is handled by defining properly the IsSimpleAssignmentTarget
  static semantics rule.
description: Try to use optional chaining in LHS of assignment
features: [optional-chaining]
negative:
  phase: parse
  type: SyntaxError
---*/

a ?.b = c;
