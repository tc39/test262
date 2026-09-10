// This file was procedurally generated from the following sources:
// - src/decorator/accessor-deco-invalid-return-init.case
// - src/decorator/accessors/error/private/static/cls-expr.template
/*---
description: Accessor decorator cannot return invalid init (private static acessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-static-fields-private]
flags: [generated]
---*/


function dec() {
  return {
    init: 123
  };
}


function evaluate() {
  var C = class {
    @dec

    static accessor #element;
  }
}

assert.throws(TypeError, evaluate);
