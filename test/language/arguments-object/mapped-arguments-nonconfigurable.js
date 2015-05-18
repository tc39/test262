// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-configurable. Check
    arguments mapping works correctly when applying various MOP
    methods.
includes: [assert.js]
flags: [noStrict]
---*/


function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping values are not changed when property was made non-configurable.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurable(1);

function argumentsAndSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping works when property is non-configurable, variable is changed with SetMutableBinding.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndSetMutableBinding(1);

function argumentsAndDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping works when property is non-configurable, arguments property is changed with [[DefineOwnProperty]].
  Object.defineProperty(arguments, "0", {value: 2});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDefineOwnProperty(1);

function argumentsAndSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping works when property is non-configurable, arguments property is changed with [[Set]].
  arguments[0] = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndSet(1);

function argumentsAndDelete(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] returns false.
  assert.sameValue(delete arguments[0], false);

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsAndDelete(1);

function argumentsAndDeleteSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] returns false.
  assert.sameValue(delete arguments[0], false);

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Mapping works when property is non-configurable, variable is changed with SetMutableBinding.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDeleteSetMutableBinding(1);

function argumentsAndDeleteDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] returns false.
  assert.sameValue(delete arguments[0], false);

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Mapping works when property is non-configurable, arguments property is changed with [[DefineOwnProperty]].
  Object.defineProperty(arguments, "0", {value: 2});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDeleteDefineOwnProperty(1);

function argumentsAndDeleteSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] returns false.
  assert.sameValue(delete arguments[0], false);

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Mapping works when property is non-configurable, arguments property is changed with [[DefineOwnProperty]].
  arguments[0] = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDeleteSet(1);

function argumentsAndStrictDelete(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] throws TypeError in strict mode.
  var args = arguments;
  assert.throws(TypeError, function() { "use strict"; delete args[0]; });

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);
}
argumentsAndStrictDelete(1);

function argumentsAndStrictDeleteSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] throws TypeError in strict mode.
  var args = arguments;
  assert.throws(TypeError, function() { "use strict"; delete args[0]; });

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Mapping works when property is non-configurable, variable is changed with SetMutableBinding.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndStrictDeleteSetMutableBinding(1);

function argumentsAndStrictDeleteDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] throws TypeError in strict mode.
  var args = arguments;
  assert.throws(TypeError, function() { "use strict"; delete args[0]; });

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Mapping works when property is non-configurable, arguments property is changed with [[DefineOwnProperty]].
  Object.defineProperty(arguments, "0", {value: 2});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndStrictDeleteDefineOwnProperty(1);

function argumentsAndStrictDeleteSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  // Property is non-configurable, [[Delete]] throws TypeError in strict mode.
  var args = arguments;
  assert.throws(TypeError, function() { "use strict"; delete args[0]; });

  // Mapping works when property is non-configurable, arguments property was not deleted.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Mapping works when property is non-configurable, arguments property is changed with [[DefineOwnProperty]].
  arguments[0] = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndStrictDeleteSet(1);

function argumentsNonConfigurableAndNonWritable(a) {
  Object.defineProperty(arguments, "0", {configurable: false, writable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Arguments property is no longer mapped.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableAndNonWritable(1);

function argumentsNonConfigurableThenNonWritable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  Object.defineProperty(arguments, "0", {writable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Arguments property is no longer mapped.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableThenNonWritable(1);

function argumentsNonConfigurableThenNonWritableWithInterveningSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  a = 2;
  Object.defineProperty(arguments, "0", {writable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);

  // Arguments property is no longer mapped.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableThenNonWritableWithInterveningSetMutableBinding(1);

function argumentsNonConfigurableThenNonWritableWithInterveningSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  arguments[0] = 2;
  Object.defineProperty(arguments, "0", {writable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);

  // Arguments property is no longer mapped.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 2);
}
argumentsNonConfigurableThenNonWritableWithInterveningSet(1);

function argumentsNonConfigurableThenNonWritableWithDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  Object.defineProperty(arguments, "0", {value: 2});
  Object.defineProperty(arguments, "0", {writable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);

  // Arguments property is no longer mapped.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 2);
}
argumentsNonConfigurableThenNonWritableWithDefineOwnProperty(1);

function argumentsNonWritableThenNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Arguments property is no longer mapped.
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonWritableThenNonConfigurable(1);

function argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  a = 2;
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);

  // Arguments property is no longer mapped.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 1);
}
argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(1);

function argumentsNonWritableThenNonConfigurableWithInterveningSet(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  arguments[0] = 2;
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  // Arguments property is no longer mapped.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 1);
}
argumentsNonWritableThenNonConfigurableWithInterveningSet(1);

function argumentsNonWritableThenNonConfigurableWithInterveningDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  Object.defineProperty(arguments, "0", {value: 2});
  Object.defineProperty(arguments, "0", {configurable: false});

  // Mapping is removed when property was made non-writable, values are not changed.
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 2);

  // Arguments property is no longer mapped.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 2);
}
argumentsNonWritableThenNonConfigurableWithInterveningDefineOwnProperty(1);
