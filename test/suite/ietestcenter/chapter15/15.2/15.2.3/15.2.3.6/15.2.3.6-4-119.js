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

    id: "15.2.3.6-4-119",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-119.js",

    description: "Object.defineProperty - 'O' is an Array, 'name' is the length property of 'O', the [[Value]] field of 'desc' is absent, test every field in 'desc' is same with corresponding attribute value of the length property in 'O' (15.4.5.1 step 3.a.i)",

    test: function testcase() {

        var arrObj = [];
        Object.defineProperty(arrObj, "length", {
            writable: true,
            enumerable: false,
            configurable: false
        });

        var verifyValue = false;
        if (arrObj.length === 0) {
            verifyValue = true;
        }

        arrObj.length = 2;
        var verifyWritable = arrObj.length === 2 ? true : false;

        var verifyEnumerable = false;
        for (var p in arrObj) {
            if (p === "length" && arrObj.hasOwnProperty(p)) {
                verifyEnumerable = true;
            }
        }

        delete arrObj.length;
        var verifyConfigurable = arrObj.hasOwnProperty("length");

        return verifyValue && verifyWritable && !verifyEnumerable && verifyConfigurable;
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }

});
