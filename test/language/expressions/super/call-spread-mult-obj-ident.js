// This file was procedurally generated from the following sources:
// - src/spread/mult-obj-ident.case
// - src/spread/default/super-call.template
/*---
description: Object Spread operator following other properties (SuperCall)
esid: sec-super-keyword-runtime-semantics-evaluation
es6id: 12.3.5.1
flags: [generated]
includes: [propertyHelper.js]
info: |
    SuperCall : super Arguments

    1. Let newTarget be GetNewTarget().
    2. If newTarget is undefined, throw a ReferenceError exception.
    3. Let func be GetSuperConstructor().
    4. ReturnIfAbrupt(func).
    5. Let argList be ArgumentListEvaluation of Arguments.
    [...]

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/
let o = {c: 3, d: 4};


var callCount = 0;

class Test262ParentClass {
  constructor(obj) {
    assert.sameValue(obj.a, 1);
    assert.sameValue(obj.b, 2);
    assert.sameValue(obj.c, 3);
    assert.sameValue(obj.d, 4);
    assert.sameValue(Object.keys(obj).length, 4);

    verifyEnumerable(obj, "a");
    verifyWritable(obj, "a");
    verifyConfigurable(obj, "a");

    verifyEnumerable(obj, "b");
    verifyWritable(obj, "b");
    verifyConfigurable(obj, "b");

    verifyEnumerable(obj, "c");
    verifyWritable(obj, "c");
    verifyConfigurable(obj, "c");

    verifyEnumerable(obj, "d");
    verifyWritable(obj, "d");
    verifyConfigurable(obj, "d");
    callCount += 1;
  }
}

class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({a: 1, b: 2, ...o});
  }
}

new Test262ChildClass();
assert.sameValue(callCount, 1);
