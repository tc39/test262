// Copyright (C) 2021 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-realm.prototype.importValue
description: >
  The value of Realm.prototype.importValue.name is 'importValue'
info: |
  Realm.prototype.importValue

  Every built-in function object, including constructors, has a "name" property 
  whose value is a String. Unless otherwise specified, this value is the name 
  that is given to the function in this specification. 

  Unless otherwise specified, the "name" property of a built-in function 
  object has the attributes 
  { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

includes: [propertyHelper.js]
features: [callable-boundary-realms]
---*/

assert.sameValue(Realm.prototype.importValue.name, "importValue", "The value of `Realm.prototype.importValue.name` is `'importValue'`");

verifyNotEnumerable(Realm.prototype.importValue, "name");
verifyNotWritable(Realm.prototype.importValue, "name");
verifyConfigurable(Realm.prototype.importValue, "name");
