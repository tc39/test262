// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-invalid-return-get.case
// - src/decorator/accessors/error/private/instance/cls-expr.template
/*---
description: Accessor decorator cannot return invalid getter (private acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-private]
flags: [generated]
---*/


function dec() {
  return {
    get: 123
  };
}


function evaluate() {
  var C = class {
    @dec

    accessor #element;
  }
}

assert.throws(TypeError, evaluate);

