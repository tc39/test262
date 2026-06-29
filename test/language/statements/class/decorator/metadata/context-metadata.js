// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-createdecoratorcontextobject
description: >
    Property descriptor for metadata property of decorator context object.
info: |
    CreateDecoratorContextObject ( kind, name, initializers, decorationState, metadataObj [ , isStatic ] )
    [...]
    13. Perform ! CreateDataPropertyOrThrow(contextObj, "metadata", metadata).
    14. Return contextObj.
includes: [deepEqual.js]
features: [decorators, decorator-metadata]
---*/

var kinds = {
    __proto__: null,
    "class": false,
    "public method": false,
    "public getter": false,
    "public setter": false,
    "public field": false,
    "public accessor": false,
    "private method": false,
    "private getter": false,
    "private setter": false,
    "private field": false,
    "private accessor": false,
};
function dec(_, context) {
    const key = `${context.private ? "private" : "public"} ${context.kind}`;
    kinds[key] = typeof context.metadata === "object";
}

@dec class C {
    @dec method() {}
    @dec get getter() {}
    @dec set setter(x) {}
    @dec field;
    @dec accessor accessor;
    @dec #method() {}
    @dec get #getter() {}
    @dec set #setter(x) {}
    @dec #field;
    @dec accessor #accessor;
}

assert.deepEqual(kinds, {
    "class": true,
    "public method": true,
    "public getter": true,
    "public setter": true,
    "public field": true,
    "public accessor": true,
    "private method": true,
    "private getter": true,
    "private setter": true,
    "private field": true,
    "private accessor": true,
});
