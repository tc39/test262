// This file was procedurally generated from the following sources:
// - src/computed-property-names/computed-property-name-from-additive-expression-add.case
// - src/computed-property-names/evaluation/class-expression-fields-methods.template
/*---
description: Computed property name from additive expression "add" (ComputedPropertyName in ClassExpression)
esid: prod-ComputedPropertyName
features: [computed-property-names]
flags: [generated]
info: |
    ClassExpression:
      classBindingIdentifier opt ClassTail

    ClassTail:
      ClassHeritage opt { ClassBody opt }

    ClassBody:
      ClassElementList

    ClassElementList:
      ClassElement

    ClassElement:
      MethodDefinition

    MethodDefinition:
      PropertyName ...
      get PropertyName ...
      set PropertyName ...

    PropertyName:
      ComputedPropertyName

    ComputedPropertyName:
      [ AssignmentExpression ]
---*/


let C = class {
  [1 + 1] = () => {
    return 2;
  };

  static [1 + 1] = () => {
    return 2;
  };
};

let c = new C();

assert.sameValue(
  c[1 + 1](),
  2
);
assert.sameValue(
  C[1 + 1](),
  2
);
