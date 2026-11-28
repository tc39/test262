// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  addInitializer throws a TypeError when it is called after the decorator
  threw an exception
esid: sec-createaddinitializerfunction
info: |
  ApplyDecoratorsToElementDefinition ( elementRecord, extraInitializers, isStatic )

  ...
  g. Let newValue be Completion(Call(decorator, decoratorReceiver, « value, context »)).
  h. Set decorationState.[[Finished]] to true.
  i. ReturnIfAbrupt(newValue).

  CreateAddInitializerFunction ( initializers, decorationState )

  1. Let addInitializerClosure be a new Abstract Closure with parameters (initializer) that captures initializers and decorationState and performs the following steps when called:
    a. If decorationState.[[Finished]] is true, throw a TypeError exception.
features: [decorators]
---*/

var savedContext;
var error = new Test262Error();

function dec(value, context) {
  savedContext = context;
  throw error;
}

assert.throws(Test262Error, function() {
  class C {
    @dec
    method() {}
  }
}, 'the element decorator error is rethrown');

assert.throws(TypeError, function() {
  savedContext.addInitializer(function() {});
}, 'addInitializer of an element decorator');

savedContext = undefined;

assert.throws(Test262Error, function() {
  @dec
  class C {}
}, 'the class decorator error is rethrown');

assert.throws(TypeError, function() {
  savedContext.addInitializer(function() {});
}, 'addInitializer of a class decorator');
