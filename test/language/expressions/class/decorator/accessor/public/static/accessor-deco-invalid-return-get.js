// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-invalid-return-get.case
// - src/decorator/accessors/error/public/static/cls-expr.template
/*---
description: Accessor decorator cannot return invalid getter (public static acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-public]
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

    static accessor element;
  }
}

assert.throws(TypeError, evaluate);
