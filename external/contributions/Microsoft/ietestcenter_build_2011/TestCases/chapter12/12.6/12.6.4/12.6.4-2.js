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


ES5Harness.registerTest({
    id: "12.6.4-2",

    path: "TestCases/chapter12/12.6/12.6.4/12.6.4-2.js",

    description: "The for-in Statement - the values of [[Enumerable]] attributes are not considered when determining if a property of a prototype object is shadowed by a previous object on the prototype chain",

    test: function testcase() {
        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "prop", {
            value: "inheritedValue",
            enumerable: false,
            configurable: true,
            writable: true
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();

        Object.defineProperty(child, "prop1", {
            value: "overridedValue1",
            enumerable: false
        });
        Object.defineProperty(child, "prop2", {
            value: "overridedValue2",
            enumerable: true
        });
        var accessedProp1 = false;
        var accessedProp2 = false;

        for (var p in child) {
            if (child.hasOwnProperty(p)) {
                if (p === "prop1") {
                    accessedProp1 = true;
                }
                if (p === "prop2") {
                    accessedProp2 = true;
                }
            }
        }
        return !accessedProp1 && accessedProp2 && child.prop1 === "overridedValue1" && child.prop2 === "overridedValue2";
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
