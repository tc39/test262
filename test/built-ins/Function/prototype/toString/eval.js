// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Value may be evaluated to produce an equivalent function
esid: sec-function.prototype.tostring
es6id: 19.2.3.5
info: >
    If the object was defined using ECMAScript code and the returned string
    representation is not in the form of a MethodDefinition or GeneratorMethod
    then the representation must be such that if the string is evaluated, using
    eval in a lexical context that is equivalent to the lexical context used to
    create the original object, it will result in a new functionally equivalent
    object. In that case the returned source code must not mention freely any
    variables that were not mentioned freely by the original function's source
    code, even if these “extra” names were originally in scope.
features: [let]
---*/
var f, f1, f2, f3;

{
  let x = 1;
  {
    let unused;
    f = function() { return x; };
  }

  f1 = eval('0,' + f.toString());
  assert.sameValue(typeof f1, 'function');
  assert.sameValue(f1(), 1);

  {
    let x = 2;
    f2 = eval('0,' + f.toString());
    assert.sameValue(typeof f2, 'function');
    assert.sameValue(f2(), 2);
  }
}

f3 = eval('0,' + f.toString());
assert.sameValue(typeof f3, 'function');
assert.throws(ReferenceError, function() {
  f3();
});
