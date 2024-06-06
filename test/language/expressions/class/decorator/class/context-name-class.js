// This file was procedurally generated from the following sources:
// - src/decorator/context-name-class.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Name of the class is correct on the context object (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, class]
flags: [generated]
---*/


function dec(_, context) {
  assert.sameValue(context.name, "C");
}


var C = @dec class {
  
}


