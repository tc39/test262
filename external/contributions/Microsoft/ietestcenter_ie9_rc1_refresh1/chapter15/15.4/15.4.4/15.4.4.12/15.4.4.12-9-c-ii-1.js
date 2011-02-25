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
    id: "15.4.4.12-9-c-ii-1",

    path: "TestCases/chapter15/15.4/15.4.4/15.4.4.12/15.4.4.12-9-c-ii-1.js",

    description: "Array.prototype.splice will splice an array even when Array.prototype has index '0' set to read-only and 'fromPresent' less than 'actualDeleteCount (Step 9.c.ii)",

    test: function testcase() {
        try {
            var arr = ["a", "b", "c"];
            Array.prototype[0] = "test";
            var newArr = arr.splice(2, 1, "d");

            var verifyValue = false;
            verifyValue = arr.length === 3 && arr[0] === "a" && arr[1] === "b" && arr[2] === "d"
                && newArr[0] === "c" && newArr.length === 1;

            var verifyEnumerable = false;
            for (var p in newArr) {
                if (newArr.hasOwnProperty("0") && p === "0") {
                    verifyEnumerable = true;
                }
            }

            var verifyWritable = false;
            newArr[0] = 12;
            verifyWritable = newArr[0] === 12;

            var verifyConfigurable = false;
            delete newArr[0];
            verifyConfigurable = newArr.hasOwnProperty("0");

            return verifyValue && !verifyConfigurable && verifyEnumerable && verifyWritable;
        } finally {
            delete Array.prototype[0];
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
