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
includes: [propertyHelper.js]
features: [decorators, decorator-metadata]
---*/

var contextObj;
function dec(_, context) {
  contextObj = context;
}

void @dec class C {};
assert.sameValue(typeof contextObj.metadata, "object");
verifyProperty(contextObj, 'metadata', {
  enumerable: false,
  writable: true,
  configurable: true,
});
