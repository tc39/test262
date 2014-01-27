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
 * Tests for Math.sign(x), as defined in spec at
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.imul
 * @author Nebu Pookins (nebupookins@gmail.com)
 */
(function() {

	function assert(claim, msg) {
		if (!claim) {
			$ERROR(msg);
		}
	}

	function isPositiveZero(x) {
		if (x !== 0) {
			return false;
		}
		/*
		 * According to http://es5.github.io/#x15.8.2.5, Math.atan2(0, 0) === 0, and
		 * Math.atan2(0, -0) ~= Pi.
		 */
		return Math.atan2(0, x) === 0;
	}

	assert(typeof Math.sign === 'function', "Math.sign should be a function.");

	assert(Number.isNaN(Math.sign(NaN)), "If x is NaN, the result is NaN.");

	assert(Math.sign(-0) === -0, "If x is −0, the result is −0.");
	assert(!isPositiveZero(Math.sign(-0)), "If x is −0, the result is −0.");

	assert(Math.sign(+0) === +0, "If x is +0, the result is +0.");
	assert(isPositiveZero(Math.sign(+0)), "If x is +0, the result is +0.");

	assert(Math.sign(-0.000001) === - 1, "If x is negative and not −0, the result is −1.");
	assert(Math.sign(-1) === - 1, "If x is negative and not −0, the result is −1.");
	assert(Math.sign(-10000000) === - 1, "If x is negative and not −0, the result is −1.");
	assert(Math.sign(-Infinity) === - 1, "If x is negative and not −0, the result is −1.");

	assert(Math.sign(+0.000001) === + 1, "If x is positive and not +0, the result is +1.");
	assert(Math.sign(+1) === + 1, "If x is positive and not +0, the result is +1.");
	assert(Math.sign(+10000000) === + 1, "If x is positive and not +0, the result is +1.");
	assert(Math.sign(+Infinity) === + 1, "If x is positive and not +0, the result is +1.");
})();
