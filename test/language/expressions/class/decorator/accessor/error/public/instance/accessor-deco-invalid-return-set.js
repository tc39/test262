// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-invalid-return-set.case
// - src/decorator/accessors/error/public/instance/cls-expr.template
/*---
description: Accessor decorator cannot return invalid setter (public acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec() {
  return {
    set: 123
  };
}


function evaluate() {
  var C = class {
    @dec

    accessor element;
  }
}

assert.throws(TypeError, evaluate);

