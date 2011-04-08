{0}
// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {{
id: "{1}",

path: "{2}",

description: "{4}",

test: function testcase() {{
  try {{
     (function() {{
        {5} {6} }})();
   }} catch (__e__) {{return true  /* failure is success */}};
   return false /* but success is failure */
 }},

precondition: function precond() {{
   {7}
 }}
}});
