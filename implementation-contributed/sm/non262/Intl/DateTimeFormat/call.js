// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- compareArray.js
- non262-Intl-DateTimeFormat-shell.js
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
function IsIntlService(c) {
    return typeof c === "function" &&
           c.hasOwnProperty("prototype") &&
           c.prototype.hasOwnProperty("resolvedOptions");
}

function IsObject(o) {
    return Object(o) === o;
}

function IsPrimitive(o) {
    return Object(o) !== o;
}

function thisValues() {
    const intlConstructors = Object.getOwnPropertyNames(Intl).map(name => Intl[name]).filter(IsIntlService);

    return [
        // Primitive values.
        ...[undefined, null, true, "abc", Symbol(), 123],

        // Object values.
        ...[{}, [], /(?:)/, function(){}, new Proxy({}, {})],

        // Intl objects.
        ...[].concat(...intlConstructors.map(ctor => {
            let args = [];
            if (ctor === Intl.DisplayNames) {
                // Intl.DisplayNames can't be constructed without any arguments.
                args = [undefined, {type: "language"}];
            }

            return [
                // Instance of an Intl constructor.
                new ctor(...args),

                // Instance of a subclassed Intl constructor.
                new class extends ctor {}(...args),

                // Object inheriting from an Intl constructor prototype.
                Object.create(ctor.prototype),

                // Intl object not inheriting from its default prototype.
                Object.setPrototypeOf(new ctor(...args), Object.prototype),
            ];
        })),
    ];
}

const intlFallbackSymbol = Object.getOwnPropertySymbols(Intl.DateTimeFormat.call(Object.create(Intl.DateTimeFormat.prototype)))[0];

// Invoking [[Call]] for Intl.DateTimeFormat returns a new instance unless called
// with an instance inheriting from Intl.DateTimeFormat.prototype.
for (let thisValue of thisValues()) {
    let obj = Intl.DateTimeFormat.call(thisValue);

    if (!Intl.DateTimeFormat.prototype.isPrototypeOf(thisValue)) {
        assert.sameValue(Object.is(obj, thisValue), false);
        assert.sameValue(obj instanceof Intl.DateTimeFormat, true);
        if (IsObject(thisValue))
            assert.compareArray(Object.getOwnPropertySymbols(thisValue), []);
    } else {
        assert.sameValue(Object.is(obj, thisValue), true);
        assert.sameValue(obj instanceof Intl.DateTimeFormat, true);
        assert.compareArray(Object.getOwnPropertySymbols(thisValue), [intlFallbackSymbol]);
    }
}

// Intl.DateTimeFormat uses the legacy Intl constructor compromise semantics.
// - Test when InstanceofOperator(thisValue, %DateTimeFormat%) returns true.
for (let thisValue of thisValues().filter(IsObject)) {
    let isPrototypeOf = Intl.DateTimeFormat.prototype.isPrototypeOf(thisValue);
    let hasInstanceCalled = false;
    Object.defineProperty(Intl.DateTimeFormat, Symbol.hasInstance, {
        value() {
            assert.sameValue(hasInstanceCalled, false);
            hasInstanceCalled = true;
            return true;
        }, configurable: true
    });
    let obj = Intl.DateTimeFormat.call(thisValue);
    delete Intl.DateTimeFormat[Symbol.hasInstance];

    assert.sameValue(Object.is(obj, thisValue), isPrototypeOf);
    assert.sameValue(hasInstanceCalled, false);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), isPrototypeOf ? [intlFallbackSymbol] : []);
}
// - Test when InstanceofOperator(thisValue, %DateTimeFormat%) returns false.
for (let thisValue of thisValues().filter(IsObject)) {
    let isPrototypeOf = Intl.DateTimeFormat.prototype.isPrototypeOf(thisValue);
    let hasInstanceCalled = false;
    Object.defineProperty(Intl.DateTimeFormat, Symbol.hasInstance, {
        value() {
            assert.sameValue(hasInstanceCalled, false);
            hasInstanceCalled = true;
            return false;
        }, configurable: true
    });
    let obj = Intl.DateTimeFormat.call(thisValue);
    delete Intl.DateTimeFormat[Symbol.hasInstance];

    assert.sameValue(Object.is(obj, thisValue), isPrototypeOf);
    assert.sameValue(obj instanceof Intl.DateTimeFormat, true);
    assert.sameValue(hasInstanceCalled, false);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), isPrototypeOf ? [intlFallbackSymbol] : []);
}
// - Test with primitive values.
for (let thisValue of thisValues().filter(IsPrimitive)) {
    // Ensure @@hasInstance is not called.
    Object.defineProperty(Intl.DateTimeFormat, Symbol.hasInstance, {
        value() { assert.sameValue(true, false); }, configurable: true
    });
    let obj = Intl.DateTimeFormat.call(thisValue);
    delete Intl.DateTimeFormat[Symbol.hasInstance];

    assert.sameValue(Object.is(obj, thisValue), false);
    assert.sameValue(obj instanceof Intl.DateTimeFormat, true);
}

// Throws an error when attempting to install [[FallbackSymbol]] twice.
{
    let thisValue = Object.create(Intl.DateTimeFormat.prototype);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), []);

    assert.sameValue(Intl.DateTimeFormat.call(thisValue), thisValue);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), [intlFallbackSymbol]);

    assertThrowsInstanceOf(() => Intl.DateTimeFormat.call(thisValue), TypeError);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), [intlFallbackSymbol]);
}

// Throws an error when the thisValue is non-extensible.
{
    let thisValue = Object.create(Intl.DateTimeFormat.prototype);
    Object.preventExtensions(thisValue);

    assertThrowsInstanceOf(() => Intl.DateTimeFormat.call(thisValue), TypeError);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), []);
}

// [[FallbackSymbol]] is installed as a frozen property holding an Intl.DateTimeFormat instance.
{
    let thisValue = Object.create(Intl.DateTimeFormat.prototype);
    Intl.DateTimeFormat.call(thisValue);

    let desc = Object.getOwnPropertyDescriptor(thisValue, intlFallbackSymbol);
    assert.sameValue(desc !== undefined, true);
    assert.sameValue(desc.writable, false);
    assert.sameValue(desc.enumerable, false);
    assert.sameValue(desc.configurable, false);
    assert.sameValue(desc.value instanceof Intl.DateTimeFormat, true);
}

// Ensure [[FallbackSymbol]] is installed last by changing the [[Prototype]]
// during initialization.
{
    let thisValue = {};
    let options = {
        get hour12() {
            Object.setPrototypeOf(thisValue, Intl.DateTimeFormat.prototype);
            return false;
        }
    };
    let obj = Intl.DateTimeFormat.call(thisValue, undefined, options);
    assert.sameValue(Object.is(obj, thisValue), true);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), [intlFallbackSymbol]);
}
{
    let thisValue = Object.create(Intl.DateTimeFormat.prototype);
    let options = {
        get hour12() {
            Object.setPrototypeOf(thisValue, Object.prototype);
            return false;
        }
    };
    let obj = Intl.DateTimeFormat.call(thisValue, undefined, options);
    assert.sameValue(Object.is(obj, thisValue), false);
    assert.compareArray(Object.getOwnPropertySymbols(thisValue), []);
}

