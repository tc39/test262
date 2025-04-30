// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When the [[Put]] method of O is called with property P and value V,
    then set the value of the property to V. The attributes of the property are not changed
es5id: 8.12.5_A2
description: Put to existent properties
---*/

var _map={1:"one",two:2};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
_map[1]="uno";
assert.sameValue(_map[1], "uno", '#1: var _map={1:"one",two:2}; _map[1]="uno"; _map[1] === "uno"');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
_map["1"]=1;
assert.sameValue(_map[1], 1, '#2: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map[1] === 1');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
_map["two"]="two";
assert.sameValue(_map["two"], "two", '#3: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map["two"] === "two"');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
_map.two="duo";
assert.sameValue(_map.two, "duo", '#4: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map.two="duo"; _map.two === "duo"');
//
//////////////////////////////////////////////////////////////////////////////
