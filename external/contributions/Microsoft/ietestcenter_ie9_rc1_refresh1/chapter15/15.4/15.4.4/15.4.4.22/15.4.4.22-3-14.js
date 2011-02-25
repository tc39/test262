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

    id: "15.4.4.22-3-14",

    path: "TestCases/chapter15/15.4/15.4.4/15.4.4.22/15.4.4.22-3-14.js",

    description: "Array.prototype.reduceRight - value of 'length' is a string containing +/-Infinity",

    test: function testcase() {

        var accessed1 = false;
        var accessed2 = false;
        var accessed3 = false;

        function callbackfn1(prevVal, curVal, idx, obj) {
            accessed1 = true;
        }

        function callbackfn2(prevVal, curVal, idx, obj) {
            accessed2 = true;
        }

        function callbackfn3(prevVal, curVal, idx, obj) {
            accessed3 = true;
        }

        var obj1 = { 0: 9, length: "Infinity" };
        var obj2 = { 0: 9, length: "-Infinity" };
        var obj3 = { 0: 9, length: "+Infinity" };

        return Array.prototype.reduceRight.call(obj1, callbackfn1, 1) === 1 &&
            Array.prototype.reduceRight.call(obj2, callbackfn2, 2) === 2 &&
            Array.prototype.reduceRight.call(obj3, callbackfn3, 3) === 3 &&
            !accessed1 && !accessed2 && !accessed3;
    },

    precondition: function prereq() {
        return fnExists(Array.prototype.reduceRight);
    }

});
