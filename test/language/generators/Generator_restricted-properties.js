// Copyright (C) 2015 Caitlin Potter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*--- 
description: >
    Functions created using GeneratorFunction syntactic form do not
    have own properties "caller" or "arguments", but inherit them from
    %FunctionPrototype%.
features: [generators]
---*/

function* generator() {}

assert.sameValue(generator.hasOwnProperty('caller'), false, 'Functions created using ArrowFunction syntactic form do not have own property "caller"');
assert.sameValue(generator.hasOwnProperty('arguments'), false, 'Functions created using ArrowFunction syntactic form do not have own property "arguments"');

assert.throws(TypeError, function() {
  return generator.caller;
});

assert.throws(TypeError, function() {
  generator.caller = {};
});

assert.throws(TypeError, function() {
  return generator.arguments;
});

assert.throws(TypeError, function() {
  generator.arguments = {};
});

var Generator = Object.getPrototypeOf(generator);
var GeneratorFunction = Generator.constructor;
var newgenerator = new GeneratorFunction();

assert.sameValue(newgenerator.hasOwnProperty('caller'), false, 'Generators created using GeneratorFunction constructor do not have own property "caller"');
assert.sameValue(newgenerator.hasOwnProperty('arguments'), false, 'Generators created using GeneratorFunction constructor do not have own property "arguments"');

assert.throws(TypeError, function() {
  return newgenerator.caller;
});

assert.throws(TypeError, function() {
  newgenerator.caller = {};
});

assert.throws(TypeError, function() {
  return newgenerator.arguments;
});

assert.throws(TypeError, function() {
  newgenerator.arguments = {};
});
