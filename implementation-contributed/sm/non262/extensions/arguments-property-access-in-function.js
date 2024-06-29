// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 721322;
var summary =
  'f.arguments must trigger an arguments object in non-strict mode functions';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var obj =
  {
    test: function()
    {
      var args = obj.test.arguments;
      assert.sameValue(args !== null, true);
      assert.sameValue(args[0], 5);
      assert.sameValue(args[1], undefined);
      assert.sameValue(args.length, 2);
    }
  };
obj.test(5, undefined);

var sobj =
  {
    test: function()
    {
     "use strict";

      try
      {
        var args = sobj.test.arguments;
        throw new Error("access to arguments property of strict mode " +
                        "function didn't throw");
      }
      catch (e)
      {
        assert.sameValue(e instanceof TypeError, true,
                 "should have thrown TypeError, instead got: " + e);
      }
    }
  };
sobj.test(5, undefined);

/******************************************************************************/

print("Tests complete");
