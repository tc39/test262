// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled rejects if IteratorStep throws
features: [Symbol.iterator, Promise.anySettled]
flags: [async]
---*/

var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
  get: function() {
    return {
      next: function() {
        var v = {};
        Object.defineProperty(v, 'value', {
          get: function() {
            throw new Error("abrupt completion");
          }
        });
        return v;
      }
    };
  }
});

Promise.anySettled(iterThrows).then(function() {
  $ERROR('Promise unexpectedly fulfilled: Promise.anySettled(iterThrows) should throw TypeError');
}, function(err) {
  if (!(err instanceof TypeError)) {
    $ERROR('Expected TypeError, got ' + err);
  }
}).then($DONE, $DONE);
