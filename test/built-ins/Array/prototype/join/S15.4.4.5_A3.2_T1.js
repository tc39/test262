// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToString from array arguments
esid: sec-array.prototype.join
description: >
    Checking arguments and separator in ["", "\\", "&", true,
    Infinity, null, undefind, NaN]
---*/

var x = new Array("", "", "");
assert.sameValue(x.join(""), "", '#0: var x = new Array("","",""); x.join("") === ""');

var x = new Array("\\", "\\", "\\");
assert.sameValue(x.join("\\"), "\\\\\\\\\\", '#1: var x = new Array("\\","\\","\\"); x.join("\\") === "\\\\\\\\\\"');

var x = new Array("&", "&", "&");
assert.sameValue(x.join("&"), "&&&&&", '#2: var x = new Array("&", "&", "&"); x.join("&") === "&&&&&"');

var x = new Array(true, true, true);
assert.sameValue(x.join(), "true,true,true", '#3: var x = new Array(true,true,true); x.join(true,true,true) === "true,true,true"');

var x = new Array(null, null, null);
assert.sameValue(x.join(), ",,", '#4: var x = new Array(null,null,null); x.join(null,null,null) === ",,"');

var x = new Array(undefined, undefined, undefined);
assert.sameValue(x.join(), ",,", '#5: var x = new Array(undefined,undefined,undefined); x.join(undefined,undefined,undefined) === ",,"');

var x = new Array(Infinity, Infinity, Infinity);
assert.sameValue(x.join(), "Infinity,Infinity,Infinity", '#6: var x = new Array(Infinity,Infinity,Infinity); x.join(Infinity,Infinity,Infinity) === "Infinity,Infinity,Infinity"');

var x = new Array(NaN, NaN, NaN);
assert.sameValue(x.join(), "NaN,NaN,NaN", '#7: var x = new Array(NaN,NaN,NaN); x.join(NaN,NaN,NaN) === "NaN,NaN,NaN"');
