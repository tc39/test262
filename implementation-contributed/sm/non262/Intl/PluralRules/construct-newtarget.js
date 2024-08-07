// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
- non262-Intl-PluralRules-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// Test subclassing %Intl.PluralRules% works correctly.
class MyPluralRules extends Intl.PluralRules {}

var obj = new MyPluralRules();
assert.sameValue(obj instanceof MyPluralRules, true);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), MyPluralRules.prototype);

obj = Reflect.construct(MyPluralRules, []);
assert.sameValue(obj instanceof MyPluralRules, true);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), MyPluralRules.prototype);

obj = Reflect.construct(MyPluralRules, [], MyPluralRules);
assert.sameValue(obj instanceof MyPluralRules, true);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), MyPluralRules.prototype);

obj = Reflect.construct(MyPluralRules, [], Intl.PluralRules);
assert.sameValue(obj instanceof MyPluralRules, false);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), Intl.PluralRules.prototype);


// Set a different constructor as NewTarget.
obj = Reflect.construct(MyPluralRules, [], Array);
assert.sameValue(obj instanceof MyPluralRules, false);
assert.sameValue(obj instanceof Intl.PluralRules, false);
assert.sameValue(obj instanceof Array, true);
assert.sameValue(Object.getPrototypeOf(obj), Array.prototype);

obj = Reflect.construct(Intl.PluralRules, [], Array);
assert.sameValue(obj instanceof Intl.PluralRules, false);
assert.sameValue(obj instanceof Array, true);
assert.sameValue(Object.getPrototypeOf(obj), Array.prototype);


// The prototype defaults to %PluralRulesPrototype% if null.
function NewTargetNullPrototype() {}
NewTargetNullPrototype.prototype = null;

obj = Reflect.construct(Intl.PluralRules, [], NewTargetNullPrototype);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), Intl.PluralRules.prototype);

obj = Reflect.construct(MyPluralRules, [], NewTargetNullPrototype);
assert.sameValue(obj instanceof MyPluralRules, false);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), Intl.PluralRules.prototype);


// "prototype" property is retrieved exactly once.
var trapLog = [], getLog = [];
var ProxiedConstructor = new Proxy(Intl.PluralRules, new Proxy({
    get(target, propertyKey, receiver) {
        getLog.push(propertyKey);
        return Reflect.get(target, propertyKey, receiver);
    }
}, {
    get(target, propertyKey, receiver) {
        trapLog.push(propertyKey);
        return Reflect.get(target, propertyKey, receiver);
    }
}));

obj = Reflect.construct(Intl.PluralRules, [], ProxiedConstructor);
assert.compareArray(trapLog, ["get"]);
assert.compareArray(getLog, ["prototype"]);
assert.sameValue(obj instanceof Intl.PluralRules, true);
assert.sameValue(Object.getPrototypeOf(obj), Intl.PluralRules.prototype);


