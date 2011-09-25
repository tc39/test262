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
    id: "15.2.3.7-5-a-6",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-a-6.js",

    description: "Object.defineProperties - enumerable own accessor property of 'Properties' without a get function that overrides enumerable inherited accessor property of 'Properties' is defined in 'O' ",

    test: function testcase() {

        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "prop", {
            get: function () {
                return 12;
            },
            enumerable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        Object.defineProperty(child, "prop", {
            get: function () {
                return {
                    set: function () { }
                };
            },
            enumerable: true
        });
        Object.defineProperties(obj, child);

        return obj.hasOwnProperty("prop") && typeof obj.prop === "undefined";
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperties) && fnExists(Object.defineProperty);
    }
});
