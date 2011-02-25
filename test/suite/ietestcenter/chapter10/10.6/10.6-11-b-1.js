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
    id: "10.6-11-b-1",

    path: "TestCases/chapter10/10.6/10.6-11-b-1.js",

    description: "Arguments Object has index property '0' as its own property, it shoulde be writable, enumerable, configurable and does not invoke the setter defined on Object.prototype[0] (Step 11.b)",

    test: function testcase() {
        try {
            var data = "data";
            var getFunc = function () {
                return data;
            };

            var setFunc = function (value) {
                data = value;
            };

            Object.defineProperty(Object.prototype, "0", {
                get: getFunc,
                set: setFunc,
                configurable: true
            });

            var argObj = (function () { return arguments })(1);

            var verifyValue = false;
            verifyValue = (argObj[0] === 1);

            var verifyEnumerable = false;
            for (var p in argObj) {
                if (p === "0" && argObj.hasOwnProperty("0")) {
                    verifyEnumerable = true;
                }
            }

            var verifyWritable = false;
            argObj[0] = 1001;
            verifyWritable = (argObj[0] === 1001);

            var verifyConfigurable = false;
            delete argObj[0];
            verifyConfigurable = argObj.hasOwnProperty("0");

            return verifyValue && verifyWritable && verifyEnumerable && !verifyConfigurable && data === "data";
        } finally {
            delete Object.prototype[0];
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
