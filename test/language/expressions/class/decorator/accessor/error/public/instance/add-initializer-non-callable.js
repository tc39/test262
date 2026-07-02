// This file was procedurally generated from the following sources:
// - src/decorator/add-initializer-non-callable.case
// - src/decorator/accessors/error/public/instance/cls-expr.template
/*---
description: addInitializer throws TypeError if argument is not callable (public accessor decorator behavior in class expression)
esid: prod-FieldDefinition
features: [decorators, class, class-fields-public]
flags: [generated]
---*/


function dec(_, context) {
  context.addInitializer(123);
}


function evaluate() {
  var C = class {
    @dec

    accessor element;
  }
}

assert.throws(TypeError, evaluate);

