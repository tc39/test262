// This file was procedurally generated from the following sources:
// - src/function-forms/forbidden-ext-indirect-access-prop-caller.case
// - src/function-forms/forbidden-extensions/bullet-two/async-meth.template
/*---
description: Forbidden extension, o.caller (async method)
esid: sec-async-definitions
features: [async-functions]
flags: [generated, noStrict, async]
info: |
    AsyncMethod :
     async PropertyName ( UniqueFormalParameters ) { AsyncFunctionBody }


    If an implementation extends any function object with an own property named "caller" the value of that property, as observed using [[Get]] or [[GetOwnProperty]], must not be a strict function object. If it is an accessor property, the function that is the value of the property's [[Get]] attribute must never return a strict function when called.

---*/
function inner() {
  // This property is forbidden from having a value that is strict function object
  return inner.caller;
}


var callCount = 0;

var obj = {
  async method() {
    "use strict";
    inner().toString();
    callCount++;
  }
};

obj.method()
  .then(_ => {
    throw new Test262Error('function should not be resolved');
  }, error => assert.sameValue(error.constructor, TypeError))
  .then(() => {
    assert.sameValue(callCount, 0, 'function body is not evaluated');
  }, $DONE)
  .then($DONE, $DONE);
