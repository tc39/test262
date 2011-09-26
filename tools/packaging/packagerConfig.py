# Copyright (c) 2009 Microsoft Corporation 
# 
# Redistribution and use in source and binary forms, with or without modification, are permitted provided
# that the following conditions are met: 
#    * Redistributions of source code must retain the above copyright notice, this list of conditions and
#      the following disclaimer. 
#    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
#      the following disclaimer in the documentation and/or other materials provided with the distribution.  
#    * Neither the name of Microsoft nor the names of its contributors may be used to
#      endorse or promote products derived from this software without specific prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
# IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
# FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
# ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#--Imports---------------------------------------------------------------------
import os
import subprocess
import stat
import re

#--Globals---------------------------------------------------------------------
MAX_CASES_PER_JSON = 1000

WEBSITE_SHORT_NAME = "website"
CONSOLE_SHORT_NAME = "console"

#Path to the root of the Hg repository (relative to this file's location)
TEST262_ROOT = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "..")
TEST262_ROOT = os.path.abspath(TEST262_ROOT)

#Directory full of test cases we want to port to the website's test harness runner
TEST262_CASES_DIR = os.path.join(TEST262_ROOT, "test", "suite")

#Directory containing test harness files to be ported over to the website. Note that
#only *.js files will be migrated from this dir.
TEST262_HARNESS_DIR = os.path.join(TEST262_ROOT, "test", "harness")

#Directory full of website test cases (ported over from TEST262_CASES_DIR)
TEST262_WEB_CASES_DIR = os.path.join(TEST262_ROOT, WEBSITE_SHORT_NAME, "json")
TEST262_CONSOLE_CASES_DIR = os.path.join(TEST262_ROOT, CONSOLE_SHORT_NAME)

#Directory containing the website's test harness (ported over from TEST262_HARNESS_DIR)
TEST262_WEB_HARNESS_DIR = os.path.join(TEST262_ROOT, WEBSITE_SHORT_NAME, "harness")
TEST262_CONSOLE_HARNESS_DIR = os.path.join(TEST262_ROOT, CONSOLE_SHORT_NAME, "harness")

#Path to the ported test case files on the actual website as opposed to the Hg layout
WEBSITE_CASES_PATH = "json/"

#The name of a file which contains a list of tests which should be disabled in test262.
#These tests are either invalid as-per ES5 or have issues with the test262 web harness.
EXCLUDED_FILENAME = os.path.join(TEST262_ROOT, "test", "config", "excludelist.xml")

WEBSITE_EXCLUDE_RE_LIST = ["bestPractice"]
WEBSITE_EXCLUDE_RE_LIST = [ re.compile(x) for x in WEBSITE_EXCLUDE_RE_LIST]

#------------------------------------------------------------------------------

TEMPLATE_LINES = None
__lastHarnessType = None

def generateHarness(harnessType, jsonName, title):
    global TEMPLATE_LINES
    global __lastHarnessType
    if TEMPLATE_LINES==None or harnessType!=__lastHarnessType:
        __lastHarnessType = harnessType
        TEMPLATE_LINES = []
        with open(os.path.join(os.getcwd(), "templates","runner." + harnessType + ".html"), "r") as f:
            TEMPLATE_LINES = f.readlines()
    fileName = os.path.join(TEST262_ROOT, WEBSITE_SHORT_NAME, jsonName.replace(".json", ".html"))
    fileNameExists = False
    if os.path.exists(fileName):
        SC_HELPER.edit(fileName)
        fileNameExists = True
    with open(fileName, "w") as f:
        for line in TEMPLATE_LINES:
            if "var TEST_LIST_PATH =" in line:
                f.write("    var TEST_LIST_PATH = \"json/" + jsonName + "\";" + os.linesep)
            #elif "ECMAScript 5" in line:
            #    f.write(line.replace("ECMAScript 5", "ECMAScript 5: %s" % title))
            else:
                f.write(line)
    if not fileNameExists:
        SC_HELPER.add(fileName)

#------------------------------------------------------------------------------
class SCAbstraction(object):
    '''
    A class which abstracts working with source control systems in relation to 
    generated test262 files.  Useful when test262 is also used internally by
    browser implementors.
    '''
    def edit(self, filename):
        '''
        Source control edit of a file. For Mercurial, just make sure it's
        writable.
        '''
        if not(os.stat(filename).st_mode & stat.S_IWRITE):
            os.chmod(filename, stat.S_IWRITE)
    
    def add(self, filename):
        '''
        Source control add of a file.
        '''
        subprocess.call(["hg", "add", filename])
        
SC_HELPER = SCAbstraction()