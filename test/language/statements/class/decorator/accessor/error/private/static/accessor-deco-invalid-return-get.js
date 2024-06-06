// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-invalid-return-get.case
// - src/decorator/accessors/error/private/static/cls-decl.template
/*---
description: Accessor decorator cannot return invalid getter (private static acessor decorator behavior in class declaration)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec() {
  return {
    get: 123
  };
}


function evaluate() {
  class C {
    @dec

    static accessor #element;
  }
}

assert.throws(TypeError, evaluate);

