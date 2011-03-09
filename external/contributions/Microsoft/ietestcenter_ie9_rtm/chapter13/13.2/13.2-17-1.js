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
    id: "13.2-17-1",

    path: "TestCases/chapter13/13.2/13.2-17-1.js",

    description: "Function Object has 'constructor' as its own property, it is not enumerable and does not invoke the setter defined on Function.prototype.constructor (Step 17)",

    test: function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Object.prototype, "constructor");
        try {
            var getFunc = function () {
                return 100;
            };

            var data = "data";
            var setFunc = function (value) {
                data = value;
            };

            Object.defineProperty(Object.prototype, "constructor", {
                get: getFunc,
                set: setFunc,
                configurable: true
            });

            var fun = function () {};

            var verifyValue = false;
	    verifyValue = (fun.prototype.constructor == "function () {}" && typeof fun.prototype.constructor === "function");

            var verifyEnumerable = false;
            for (var p in fun.prototype) {
                if (p === "constructor" && fun.prototype.hasOwnProperty("constructor")) {
                    verifyEnumerable = true;
                }
            }

            var verifyWritable = false;
            fun.prototype.constructor = 12;
            verifyWritable = (fun.prototype.constructor === 12);

            var verifyConfigurable = false;
            delete fun.prototype.constructor;
            verifyConfigurable = fun.hasOwnProperty("constructor");

            return verifyValue && verifyWritable && !verifyEnumerable && !verifyConfigurable && data === "data";
        } finally {
            Object.defineProperty(Object.prototype, "constructor", desc);
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
