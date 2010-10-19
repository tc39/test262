{0}
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {{
id: "{1}",

path: "{2}",

description: "{3}",

test: function testcase() {{
  try {{
     (function() {{
        {4} {5} }})();
   }} catch (__e__) {{return true  /* failure is success */}};
   return false /* but success is failure */
 }}
}});
