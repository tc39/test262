/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262-object-shell.js, sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
description: |
  pending
esid: pending
---*/

function test(field)
{
  var prop = "[[" + field[0].toUpperCase() + field.substring(1) + "]]";
  function inner()
  {
     // Create an object with an accessor property.
     var obj = { x: 42, get y() {}, set y(v) {} };

     // 1) convert it to dictionary mode, in the process 2) creating a new
     // version of that accessor property whose [[Get]] and [[Set]] are objects
     // that trigger post barriers.
     delete obj.x;

     var desc = {};
     desc[field] = undefined;

     // Overwrite [[field]] with undefined.  Note #1 above is necessary so this
     // is an actual *overwrite*, and not (possibly) a shape-tree fork that
     // doesn't overwrite.
     Object.defineProperty(obj, "y", desc);

  }

  inner();
}

test("get");
test("set");
