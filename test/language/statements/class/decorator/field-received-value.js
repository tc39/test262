// This file was procedurally generated from the following sources:
// - src/decorator/field-received-value.case
// - src/decorator/default/cls-decl.template
/*---
description: Value passed to field decorators is undefined (decorator usage in a class declaration)
esid: prod-FieldDefinition
features: [decorators, class]
flags: [generated]
info: |
    ApplyDecoratorsToElementDefinition ( homeObject, elementRecord, extraInitializers, isStatic )

    ...

    5. For each element decoratorRecord of decorators, do
      a. Let decorator be decoratorRecord.[[Decorator]].
      b. Let decoratorReceiver be decoratorRecord.[[Receiver]].
      c. Let decorationState be the Record { [[Finished]]: false }.
      d. Let context be CreateDecoratorContextObject(kind, key, extraInitializers, decorationState, isStatic).
      e. Let value be undefined.

      ...

      j. Let newValue be ? Call(decorator, decoratorReceiver, « value, context »).

---*/


function dec(value) {
  assert.sameValue(value, undefined);
}


class C {
  @dec foo;
  @dec bar = 123;

  @dec static foo;
  @dec static bar = 123;
}


