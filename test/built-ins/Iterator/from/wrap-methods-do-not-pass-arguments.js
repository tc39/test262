// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%wrapforvaliditeratorprototype%.next
description: >
  %WrapForValidIteratorPrototype%.next and %WrapForValidIteratorPrototype%.return
  call the underlying methods with no arguments
info: |
  %WrapForValidIteratorPrototype%.next ( )

  [...]
  4. Return ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]]).

  %WrapForValidIteratorPrototype%.return ( )

  [...]
  5. Let returnMethod be ? GetMethod(iterator, "return").
  [...]
  7. Return ? Call(returnMethod, iterator).
features: [iterator-helpers]
flags: []
---*/
let nextArgs;
let returnArgs;

let iter = {
  next() {
    nextArgs = arguments.length;
    return {
      done: false,
      value: 1,
    };
  },
  return() {
    returnArgs = arguments.length;
    return {
      done: true,
      value: undefined,
    };
  },
};

let wrapper = Iterator.from(iter);

wrapper.next(1, 2);
assert.sameValue(nextArgs, 0, "next is called with no arguments");

wrapper.return(1, 2);
assert.sameValue(returnArgs, 0, "return is called with no arguments");
