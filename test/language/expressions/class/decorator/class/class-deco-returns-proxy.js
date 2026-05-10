// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-proxy.case
// - src/decorator/class/standard/cls-expr.template
/*---
description: Class decorator can return a Proxy (decorator usage in a class expression)
esid: prod-FieldExpression
features: [decorators, Proxy, class]
flags: [generated]
---*/


var originalClass;
var subClass;

function dec(C, context) {
  originalClass = C;

  return new Proxy(C, {
    construct(target, args, newTarget) {
      var instance = Reflect.construct(target, args, newTarget);
      instance.proxied = true;
      return instance;
    }
  });
}


var C = @dec
 class {
  
}

assert(C !== originalClass, 'values are not the same');
var instance = new C();
assert(instance instanceof originalClass, 'instance is instance of original class');
assert.sameValue(instance.proxied, true, 'proxy construct trap ran');
