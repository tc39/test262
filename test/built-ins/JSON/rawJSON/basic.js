// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: Basic functionality of JSON.rawJSON().
info: |
  JSON.rawJSON ( text )
  ...
  9. Let _obj_ be OrdinaryObjectCreate(*null*, _internalSlotsList_).
  10. Perform ! CreateDataPropertyOrThrow(_obj_, *"rawJSON"*, _jsonString_).
  11. Perform ! SetIntegrityLevel(_obj_, ~frozen~).
  12. Return _obj_.

includes: [propertyHelper.js]
features: [json-parse-with-source]
---*/

function verifyRawJSON(primitive) {
  var entries = [
    ['primitive', JSON.rawJSON(primitive)],
    ['string', JSON.rawJSON(String(primitive))],
    ['toString', JSON.rawJSON({ toString: function() { return primitive; } })]
  ];
  for (var i = 0; i < entries.length; i++) {
    var label = 'rawJSON of ' + entries[i][0] + ' ' + (typeof primitive) + ' ' + primitive;
    var raw = entries[i][1];
    assert.sameValue(Object.getPrototypeOf(raw), null, label + ' has a null prototype');
    assert.sameValue(Object.isFrozen(raw), true, label + ' is frozen');
    assert.sameValue(
      Reflect.defineProperty(raw, 'expando', { value: true }),
      false,
      label + ' rejects new properties'
    );
    assert.sameValue(
      Object.getOwnPropertyDescriptor(raw, 'expando'),
      undefined,
      label + ' does not define new properties'
    );
    assert.compareArray(Reflect.ownKeys(raw), ['rawJSON'], label + ' own properties');
    verifyProperty(raw, 'rawJSON', {
      value: String(primitive),
      enumerable: true,
      configurable: false,
      writable: false
    });
    assert.sameValue(JSON.stringify(raw), String(primitive), label + ' JSON.stringify');
  }
  var composite = {
    primitive: entries[0][1],
    strings: [entries[1][1], entries[2][1]]
  };
  assert.sameValue(
    JSON.stringify(composite),
    '{"primitive":%s,"strings":[%s,%s]}'.replace(/%s/g, primitive),
    'JSON.stringify a structure containing rawJSON for ' + primitive
  );
}

verifyRawJSON(null);
verifyRawJSON(false);
verifyRawJSON(true);

verifyRawJSON('""');
verifyRawJSON('"foo"');
verifyRawJSON('"\\u00bD"');

verifyRawJSON(1);
verifyRawJSON(-1);
verifyRawJSON(-1.2);

verifyRawJSON('-0');
verifyRawJSON('1e0');
verifyRawJSON('1E1');
verifyRawJSON('1.23e+1');
verifyRawJSON('1.23E-1');
