/*
Copyright (c) 2014, nebu@nebupookins.net All rights reserved. Redistribution
and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software without
   specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/**
 * Tests the Number.isFinite portion of the spec:
 *
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite
 *
 * @author Nebu Pookins (nebupookins@gmail.com)
 */
(function() {
	"use strict";

	function assert(claim, msg) {
		if (!claim) {
			$ERROR(msg);
		}
	}

	//If Type(number) is not Number, return false.
	(function(undefined) {
		//undefined
		assert(Number.isFinite(undefined) === false, "Number.isFinite(undefined) should return false.");
		//null
		assert(Number.isFinite(null) === false, "Number.isFinite(null) should return false.");
		//boolean
		assert(Number.isFinite(true) === false);
		assert(Number.isFinite(false) === false);
		//string
		assert(Number.isFinite("Hello") === false);
		assert(Number.isFinite("123") === false);
		//symbol
		//TODO: Not sure how to generate a literal of this.
		//object
		assert(Number.isFinite({}) === false);
		assert(Number.isFinite(new Number(3.14)) === false);
	})();

	//If number is NaN, +∞, or −∞, return false.
	(function() {
		assert(Number.isFinite(NaN) === false);
		assert(Number.isFinite(Infinity) === false);
		assert(Number.isFinite(-Infinity) === false);
	})();

	//Otherwise, return true
	(function() {
		for (var i = -100; i < 100; i++) {
			assert(Number.isFinite(i));
		}
		assert(Number.isFinite(3.1415));
	})();
})();
