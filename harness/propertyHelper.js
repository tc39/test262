// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to safely verify the correctness of
    property descriptors.
---*/

/**
 * @param {object} obj
 * @param {string|symbol} name
 * @param {PropertyDescriptor|undefined} desc
 * @param {object} [options]
 * @param {boolean} [options.restore]
 * @param {(a: unknown, b: unknown) => boolean} [options.equaler]
 */
function verifyProperty(obj, name, desc, options) {
  assert(
    arguments.length > 2,
    'verifyProperty should receive at least 3 arguments: obj, name, and descriptor'
  );

  var originalDesc = Object.getOwnPropertyDescriptor(obj, name);
  var nameStr = String(name);

  // Allows checking for undefined descriptor if it's explicitly given.
  if (desc === undefined) {
    assert.sameValue(
      originalDesc,
      undefined,
      "obj['" + nameStr + "'] descriptor should be undefined"
    );

    // desc and originalDesc are both undefined, problem solved;
    return true;
  }

  assert(
    Object.prototype.hasOwnProperty.call(obj, name),
    "obj should have an own property " + nameStr
  );

  assert.notSameValue(
    desc,
    null,
    "The desc argument should be an object or undefined, null"
  );

  assert.sameValue(
    typeof desc,
    "object",
    "The desc argument should be an object or undefined, " + String(desc)
  );

  var failures = [];

  if (Object.prototype.hasOwnProperty.call(desc, 'value')) {
    let equaler = options && options.equaler || isSameValue;
    if (!equaler(desc.value, originalDesc.value)) {
      failures.push("descriptor value should be " + desc.value);
    }
  }

  if (Object.prototype.hasOwnProperty.call(desc, 'enumerable')) {
    if (desc.enumerable !== originalDesc.enumerable ||
        desc.enumerable !== isEnumerable(obj, name)) {
      failures.push('descriptor should ' + (desc.enumerable ? '' : 'not ') + 'be enumerable');
    }
  }

  if (Object.prototype.hasOwnProperty.call(desc, 'writable')) {
    if (desc.writable !== originalDesc.writable ||
        desc.writable !== isWritable(obj, name)) {
      failures.push('descriptor should ' + (desc.writable ? '' : 'not ') + 'be writable');
    }
  }

  if (Object.prototype.hasOwnProperty.call(desc, 'configurable')) {
    if (desc.configurable !== originalDesc.configurable ||
        desc.configurable !== isConfigurable(obj, name)) {
      failures.push('descriptor should ' + (desc.configurable ? '' : 'not ') + 'be configurable');
    }
  }

  assert(!failures.length, failures.join('; '));

  if (options && options.restore) {
    Object.defineProperty(obj, name, originalDesc);
  }

  return true;
}

function isConfigurable(obj, name) {
  try {
    delete obj[name];
  } catch (e) {
    if (!(e instanceof TypeError)) {
      $ERROR("Expected TypeError, got " + e);
    }
  }
  return !Object.prototype.hasOwnProperty.call(obj, name);
}

function isEnumerable(obj, name) {
  var stringCheck = false;

  if (typeof name === "string") {
    for (var x in obj) {
      if (x === name) {
        stringCheck = true;
        break;
      }
    }
  } else {
    // skip it if name is not string, works for Symbol names.
    stringCheck = true;
  }

  return stringCheck &&
    Object.prototype.hasOwnProperty.call(obj, name) &&
    Object.prototype.propertyIsEnumerable.call(obj, name);
}

function isSameValue(a, b) {
  if (a === 0 && b === 0) return 1 / a === 1 / b;
  if (a !== a && b !== b) return true;

  return a === b;
}

function isWritable(obj, name, verifyProp, value) {
  var newValue = value || "unlikelyValue";
  var hadValue = Object.prototype.hasOwnProperty.call(obj, name);
  var oldValue = obj[name];
  var writeSucceeded;

  try {
    obj[name] = newValue;
  } catch (e) {
    if (!(e instanceof TypeError)) {
      $ERROR("Expected TypeError, got " + e);
    }
  }

  writeSucceeded = isSameValue(obj[verifyProp || name], newValue);

  // Revert the change only if it was successful (in other cases, reverting
  // is unnecessary and may trigger exceptions for certain property
  // configurations)
  if (writeSucceeded) {
    if (hadValue) {
      obj[name] = oldValue;
    } else {
      delete obj[name];
    }
  }

  return writeSucceeded;
}

function verifyEqualTo(obj, name, value) {
  if (!isSameValue(obj[name], value)) {
    $ERROR("Expected obj[" + String(name) + "] to equal " + value +
           ", actually " + obj[name]);
  }
}

function verifyWritable(obj, name, verifyProp, value) {
  if (!verifyProp) {
    assert(Object.getOwnPropertyDescriptor(obj, name).writable,
         "Expected obj[" + String(name) + "] to have writable:true.");
  }
  if (!isWritable(obj, name, verifyProp, value)) {
    $ERROR("Expected obj[" + String(name) + "] to be writable, but was not.");
  }
}

function verifyNotWritable(obj, name, verifyProp, value) {
  if (!verifyProp) {
    assert(!Object.getOwnPropertyDescriptor(obj, name).writable,
         "Expected obj[" + String(name) + "] to have writable:false.");
  }
  if (isWritable(obj, name, verifyProp)) {
    $ERROR("Expected obj[" + String(name) + "] NOT to be writable, but was.");
  }
}

function verifyEnumerable(obj, name) {
  assert(Object.getOwnPropertyDescriptor(obj, name).enumerable,
       "Expected obj[" + String(name) + "] to have enumerable:true.");
  if (!isEnumerable(obj, name)) {
    $ERROR("Expected obj[" + String(name) + "] to be enumerable, but was not.");
  }
}

function verifyNotEnumerable(obj, name) {
  assert(!Object.getOwnPropertyDescriptor(obj, name).enumerable,
       "Expected obj[" + String(name) + "] to have enumerable:false.");
  if (isEnumerable(obj, name)) {
    $ERROR("Expected obj[" + String(name) + "] NOT to be enumerable, but was.");
  }
}

function verifyConfigurable(obj, name) {
  assert(Object.getOwnPropertyDescriptor(obj, name).configurable,
       "Expected obj[" + String(name) + "] to have configurable:true.");
  if (!isConfigurable(obj, name)) {
    $ERROR("Expected obj[" + String(name) + "] to be configurable, but was not.");
  }
}

function verifyNotConfigurable(obj, name) {
  assert(!Object.getOwnPropertyDescriptor(obj, name).configurable,
       "Expected obj[" + String(name) + "] to have configurable:false.");
  if (isConfigurable(obj, name)) {
    $ERROR("Expected obj[" + String(name) + "] NOT to be configurable, but was.");
  }
}

/**
 * @param {PropertyDescriptor} desc
 */
function isDataDescriptor(desc) {
  return typeof desc === 'object' && desc !== null &&
    Object.hasOwnProperty.call(desc, 'value') &&
    !Object.hasOwnProperty.call(desc, 'get') &&
    !Object.hasOwnProperty.call(desc, 'set');
}

/**
 * @param {PropertyDescriptor} desc
 * @param {'get' | 'get-set'} [kind]
 */
function isAccessorDescriptor(desc, kind) {
  if (typeof desc !== 'object' || desc === null ||
      Object.hasOwnProperty.call(desc, 'value') ||
      Object.hasOwnProperty.call(desc, 'writable') ||
      !Object.hasOwnProperty.call(desc, 'get') &&
      !Object.hasOwnProperty.call(desc, "set")) {
    return false;
  }
  if (kind === 'get' || kind === 'get-set') {
    if (!Object.hasOwnProperty.call(desc, 'get') || desc.get === undefined) {
      return false;
    }
  }
  if (kind === 'get-set') {
    if (!Object.hasOwnProperty.call(desc, 'set') || desc.set === undefined) {
      return false;
    }
  }
  if (kind === 'get') {
    if (Object.hasOwnProperty.call(desc, 'set') && desc.set !== undefined) {
      return false;
    }
  }
  return true;
}

/**
 * Asserts that an object has an own data-property with the provided key and attributes.
 * @type {{
 *  <T>(obj: T, key: keyof T, desc?: Omit<PropertyDescriptor, 'get' | 'set'>, options?: { equaler?: (a: unknown, b: unknown) => boolean }, message?: string): void;
 *  <T>(obj: T, key: keyof T, desc?: Omit<PropertyDescriptor, 'get' | 'set'>, message?: string): void;
 *  <T>(obj: T, key: keyof T, message?: string): void;
 * }}
 */
assert.hasOwnDataProperty = function (obj, key, ...args) {
  let desc = (typeof args[0] === 'object' || args[0] === undefined) ? args.shift() : undefined;
  let options = (typeof args[0] === 'object' || args[0] === undefined) ? args.shift() : undefined;
  let message = (typeof args[0] === 'string' || args[0] === undefined) ? args.shift() : undefined;
  let keyStr = typeof key === 'symbol' ? key.toString() : '"' + key + '"';
  let equaler = options && options.equaler;
  verifyProperty(obj, key, desc || {}, { restore: true, equaler });
  assert(isDataDescriptor(Object.getOwnPropertyDescriptor(obj, key)), 
        'Expected ' + keyStr + ' property of \'obj\' to be a data-property. ' + (message || ''));
};

/**
 * Asserts that an object has an own accessor-property with the provided key and attributes.
 * @type {{
 *  <T>(obj: T, key: keyof T, desc?: Omit<PropertyDescriptor, 'writable' | 'value'>, options?: { equaler?: (a: unknown, b: unknown) => boolean }, kind?: 'get' | 'get-set', message?: string): void;
 *  <T>(obj: T, key: keyof T, desc?: Omit<PropertyDescriptor, 'writable' | 'value'>, options?: { equaler?: (a: unknown, b: unknown) => boolean }, message?: string): void;
 *  <T>(obj: T, key: keyof T, desc?: Omit<PropertyDescriptor, 'writable' | 'value'>, kind?: 'get' | 'get-set', message?: string): void;
 *  <T>(obj: T, key: keyof T, desc?: Omit<PropertyDescriptor, 'writable' | 'value'>, message?: string): void;
 *  <T>(obj: T, key: keyof T, message?: string): void;
 * }}
 */
assert.hasOwnAccessorProperty = function (obj, key, ...args) {
  let desc = (typeof args[0] === 'object' || args[0] === undefined) ? args.shift() : undefined;
  let options = (typeof args[0] === 'object' || args[0] === undefined) ? args.shift() : undefined;
  let kind = (typeof args[0] === 'string' && /^get(-set)$/.test(args[0]) || args[0] === undefined) ? args.shift() : undefined;
  let message = (typeof args[0] === 'string' || args[0] === undefined) ? args.shift() : undefined;
  let keyStr = typeof key === 'symbol' ? key.toString() : '"' + key + '"';
  let equaler = options && options.equaler;
  verifyProperty(obj, key, desc || {}, { restore: true, equaler });
  assert(isAccessorDescriptor(Object.getOwnPropertyDescriptor(obj, key), kind),
        kind === 'get' ? 'Expected ' + keyStr + ' property of \'obj\' to be an accessor-property descriptor with a \'get\' member but no \'set\' member. ' + (message || '') :
        kind === 'get-set' ? 'Expected ' + keyStr + ' property of \'obj\' to be an accessor-property descriptor with both \'get\' and \'set\' members. ' + (message || '') :
        'Expected ' + keyStr + ' property of \'obj\' to be an accessor-property descriptor. ' + (message || ''));
};
