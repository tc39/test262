// This file was procedurally generated from the following sources:
// - src/generators/yield-spread-arr-single.case
// - src/generators/default/class-expr-method.template
/*---
description: Use yield value in a array spread position (Generator method as a ClassExpression element)
esid: prod-GeneratorMethod
flags: [generated]
includes: [compareArray.js]
info: |
    ClassElement :
      MethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

    Array Initializer

    SpreadElement[Yield, Await]:
      ...AssignmentExpression[+In, ?Yield, ?Await]

---*/
var arr = ['a', 'b', 'c'];

var callCount = 0;

var C = class {*gen() {
    callCount += 1;
    yield [...yield];
}}

var gen = C.prototype.gen;

var iter = gen();

iter.next(false);
var item = iter.next(['a', 'b', 'c']);

assert(compareArray(item.value, arr));
assert.sameValue(item.done, false);

assert.sameValue(callCount, 1);
