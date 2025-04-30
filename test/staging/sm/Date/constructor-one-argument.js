/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  new Date(value) should call ToPrimitive on value before testing for string-ness
esid: pending
---*/

assert.sameValue(new Date(new String("2012-01-31T00:00:00.000Z")).valueOf(),
         1327968000000,
         "Date constructor passed a String object should parse it");
