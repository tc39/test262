/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 

/*
Step 4 of defineProperty calls the [[DefineOwnProperty]] internal method
of O to define the property. For configurable properties, step 9b of
[[DefineOwnProperty]] permits changing the kind of a property.
*/

ES5Harness.registerTest( {
id: "15.2.3.6-4-14",

path: "TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-14.js",

description: "Object.defineProperty permits changing data property to accessor property for configurable properties",

test: function testcase() {
  var o = {};

  // create a data property. In this case,
  // [[Enumerable]] and [[Configurable]] are true
  o["foo"] = 101;

  // changing "foo" to be an accessor should succeed, since [[Configurable]]
  // on the original property will be true. Existing values of [[Configurable]]
  // and [[Enumerable]] need to be preserved and the rest need to be set to
  // their default values

  // dummy getter
  var getter = function () { return 1; }
  var d1 = { get: getter };
  Object.defineProperty(o, "foo", d1);

  var d2 = Object.getOwnPropertyDescriptor(o, "foo");

  if (d2.get === getter &&
      d2.enumerable === true &&
      d2.configurable === true) {
    return true;
  }
 },

precondition: function prereq() {
  return fnExists(Object.defineProperty) && fnExists(Object.getOwnPropertyDescriptor);
 }
});
