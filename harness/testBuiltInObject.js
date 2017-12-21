// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    A function used to assert the correctness of built-in objects.
---*/

/**
 * @description Tests that obj meets the requirements for built-in objects
 *   defined by the introduction of chapter 15 of the ECMAScript Language Specification.
 * @param {Object} obj the object to be tested.
 * @param {boolean} isFunction whether the specification describes obj as a function.
 * @param {boolean} isConstructor whether the specification describes obj as a constructor.
 * @author Norbert Lindenberg
 */

function testBuiltInObject(obj, isFunction, isConstructor) {

  if (obj === undefined) {
    $ERROR("Object being tested is undefined.");
  }

  var objString = Object.prototype.toString.call(obj);
  if (isFunction) {
    if (objString !== "[object Function]") {
      $ERROR("The [[Class]] internal property of a built-in function must be " +
          "\"Function\", but toString() returns " + objString);
    }
  } else {
    if (objString !== "[object Object]") {
      $ERROR("The [[Class]] internal property of a built-in non-function object must be " +
          "\"Object\", but toString() returns " + objString);
    }
  }

  if (!Object.isExtensible(obj)) {
    $ERROR("Built-in objects must be extensible.");
  }

  if (isFunction && Object.getPrototypeOf(obj) !== Function.prototype) {
    $ERROR("Built-in functions must have Function.prototype as their prototype.");
  }

  if (isConstructor && Object.getPrototypeOf(obj.prototype) !== Object.prototype) {
    $ERROR("Built-in prototype objects must have Object.prototype as their prototype.");
  }

  var exception;
  if (isFunction && !isConstructor) {
    // this is not a complete test for the presence of [[Construct]]:
    // if it's absent, the exception must be thrown, but it may also
    // be thrown if it's present and just has preconditions related to
    // arguments or the this value that this statement doesn't meet.
    try {
      /*jshint newcap:false*/
      var instance = new obj();
    } catch (e) {
      exception = e;
    }
    if (exception === undefined || exception.name !== "TypeError") {
      $ERROR("Built-in functions that aren't constructors must throw TypeError when " +
        "used in a \"new\" statement.");
    }
  }

  if (isFunction && !isConstructor && obj.hasOwnProperty("prototype")) {
    $ERROR("Built-in functions that aren't constructors must not have a prototype property.");
  }

  // passed the complete test!
  return true;
}
