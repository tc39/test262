// This file was procedurally generated from the following sources:
// - src/decorator/field-context-kind.case
// - src/decorator/default/cls-expr.template
/*---
description: Context kind is the string "field" when decorating a field (decorator usage in a class expression)
esid: prod-FieldDefinition
features: [decorators, class]
flags: [generated]
info: |
    CreateDecoratorContextObject ( kind, name, initializers, decorationState [ , isStatic ] )

    ...

    6. Else if kind is field, then
      a. Let kindStr be "field".

---*/


function dec(_, context) {
  assert.sameValue(context.kind, "field");
}


var C = class {
  @dec foo;
  @dec bar = 123;

  @dec static foo;
  @dec static bar = 123;
}


