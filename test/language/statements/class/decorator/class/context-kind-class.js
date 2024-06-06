// This file was procedurally generated from the following sources:
// - src/decorator/context-kind-class.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Context kind is the string "class" when decorating a method (decorator usage in a class declaration)
esid: prod-ClassDeclaration
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.kind, "class");
}


@dec
class C {
  
}


