using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Text.RegularExpressions;
using System.Xml;
using System.Configuration;
using System.Xml.Linq;
using System.Runtime.Serialization;

namespace Microsoft.Sputnik.Interop.ParserEngine
{
    [DataContract]
    public class SputnikTestScript
    {
        private string testScriptID = string.Empty;
        private string testScriptSection = string.Empty;
        private string testScriptDescription = string.Empty;
        private string testScriptAssertion = string.Empty;
        private string replicationCode = string.Empty;
        private int actualFileConvertedCount = 0;
        private bool negativeTest = false;
        private bool strictModeNegativeTest = false;
        private const string xmlNode = "format";
        private const string xmlAttribute = "sequence";
        private string[] checkSections;
        private SortedDictionary<string, string> testScriptFormats = new SortedDictionary<string, string>();

        public string Header = string.Empty;
        public string Body = string.Empty;
        public string InitialComment = string.Empty;

        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>       
        public string Id
        {
            get
            {
                return testScriptID;
            }
            set
            {
                if (value != null)
                testScriptID = value.Trim();
            }
        }
        public bool IsNegativeInStrictMode 
        {
            get
            {
                return strictModeNegativeTest;
            }
            set
            {
                strictModeNegativeTest = value;
            }
        }


        /// <summary>
        /// Gets or sets the netative test flag.
        /// </summary>
        /// <value>true if this is a @negative test</value>
        public bool IsNegative
        {
            get
            {
                return negativeTest;
            }
            set
            {
                negativeTest=value;
            }
        }

        /// <summary>
        /// Gets or sets the testScriptSection
        /// </summary>
        public string SectionName
        {
            get
            {
                return testScriptSection;
            }
            set
            {
                if(value!=null)
                testScriptSection = value.Trim();
            }
        }

        /// <summary>
        /// Actual number of input files which got converted
        /// </summary>
        public int ConvertedFileCount
        {
            get
            {
                return actualFileConvertedCount;
            }
            set
            {
                actualFileConvertedCount = value;
            }
        }


        /// <summary>
        /// Gets or sets the testScriptDescription
        /// </summary>
        [DataMember]
        public string Description
        {
            get
            {
                return testScriptDescription;
            }
            set
            {
                if (value != null)
                testScriptDescription = value.Trim();
            }
        }

        /// <summary>
        /// Gets or sets the testScriptAssersion
        /// </summary>
        [DataMember]
        public string Assertion
        {
            get
            {
                return testScriptAssertion;
            }
            set
            {
                if (value != null)
                    testScriptAssertion = value.Trim();
            }
        }

        /// <summary>
        /// Gets or sets the value for checkSections
        /// </summary>
        public string[] Checks
        {
            get
            {
                return checkSections;
            }
            set
            {
                checkSections = value;
            }
        }

        /// <summary>
        /// Gets or sets the full path.
        /// </summary>
        /// <value>The full path.</value>
        public string FullPath { get; set; }

        /// <summary>
        /// Gets or sets the replication code.
        /// </summary>
        /// <value>The replication code.</value>
        public string ReplicationCode
        {
            get
            {
                return replicationCode;
            }
            set 
            {
                if (value != null)
                replicationCode = value.Trim();
            }
        }

        /// <summary>
        /// Gets or sets the possible checks count.
        /// </summary>
        /// <value>The possible checks count.</value>
        public int PossibleChecksCount { get; set; }
        
        /// <summary>
        /// Gets or sets the pre condition code.
        /// </summary>
        /// <value>The pre condition code.</value>
        public string PreConditionCode { get; set; }

        /// <summary>
        /// Constructor which reads the regular expression formats from InputFormats.xml file
        /// </summary>
        public SputnikTestScript()
        {
            ReadInputXml();
        }

        /// <summary>
        /// Reads the regular expression formats from inputformats.xml file
        /// </summary>
        public void ReadInputXml()
        {
            string inputXmlPath = Path.GetFullPath(ConfigurationManager.AppSettings[ResourceClass.InputXMLPath].ToString());
            XmlTextReader reader = new XmlTextReader(inputXmlPath);
            try
            {
                if (File.Exists(inputXmlPath))
                {
                    while (reader.Read())
                    {
                        switch (reader.NodeType)
                        {
                            case XmlNodeType.Element:
                                if (!Convert.ToBoolean(string.Compare(reader.Name.ToLower(), xmlNode)))
                                {
                                    testScriptFormats.Add(reader.GetAttribute(xmlAttribute), reader.ReadString());
                                }
                                break;
                        }
                    }
                }
            }
            catch (XmlException ex)
            {
                Logger.WriteToLog(string.Format(ResourceClass.XMLException_Log, ex.Message));
            }
        }
    
        /// <summary>
        /// Loads the sputnik testscript file and extracts the required details from it
        /// </summary>
        /// <param name="filePath">Path to the source file</param>
        public void Load(string filePath)
        {
            string[] regexTrimDelimiter = { "\n","\r"};            
            String fullFile = string.Empty;

            using (TextReader txtReader = new StreamReader(filePath))
            {
                fullFile = txtReader.ReadToEnd();
            }
            this.FullPath = filePath;
//            ReadTestCaseEpilogue(fullFile);    
            ReadSimpleTestCase(fullFile);

/*
            //read input format from xml
            foreach (KeyValuePair<string, string> regxFormat in testScriptFormats)
            {
                Regex regxCode = new Regex(regxFormat.Value.Trim(), RegexOptions.IgnoreCase);
                MatchCollection matchCode = regxCode.Matches(fullFile);
                this.checkSections = new string[matchCode.Count];
                int counter = 0;

                //Read the code section
                foreach (Match codeSection in matchCode)
                {
                    if (codeSection.Value.ToLower().Contains("check"))
                    {
                        this.checkSections[counter] = codeSection.Value.Remove(0, codeSection.Value.IndexOf("\r"));
                    }
                    else
                    {
                        this.checkSections[counter] = codeSection.Value;
                    }
                    counter++;
                }

                if (checkSections.Length > 0)
                {
                    this.actualFileConvertedCount++;
                    break;
                }
            }
*/
        }

        /// <summary>
        /// Read a basic sputnik test file and create an object for it. Assume just a header comment and a test body
        /// </summary>
        /// <param name="fullFile">Input file content</param>
        private void ReadSimpleTestCase(string fullFile)
        {
            char[] delimiter = { ':' };
            char[] trimDelimit = { ';' ,'\r','\n'};
            string holdStr = string.Empty;
            string[] arrComments;

            Regex commentTailRegex = new Regex("\\s*\\*\\/\\s*");
            Match matchCommentTail = commentTailRegex.Match(fullFile);

            this.Header = fullFile.Substring(0,matchCommentTail.Index+matchCommentTail.Length);

            Regex csharpCommentRegx = new Regex("\\/\\*");
            Match matchCSharpCommentHead = csharpCommentRegx.Match(this.Header);
            this.InitialComment = this.Header.Substring(0, matchCSharpCommentHead.Index);

            this.Body = fullFile.Substring(matchCommentTail.Index+matchCommentTail.Length);

//            string commentFormat = ConfigurationManager.AppSettings[ResourceClass.CommentsRegexSettingKey].ToString();
            string commentFormat = "@[a-zA-Z0-9_]+(:\\s*[^\\r\\n]*)?;?\\s*(\\r|\\n)";
            Regex regx = new Regex(commentFormat);
            MatchCollection matchComments = regx.Matches(this.Header);

//            string globalCode = ConfigurationManager.AppSettings[ResourceClass.GlobalCodeRegexKey].ToString();
//            Regex gobalRegx = new Regex(globalCode);
//            Match matchGlobalCode = gobalRegx.Match(fullFile);

            foreach (Match comment in matchComments)
            {
                holdStr = comment.Value;
                arrComments = holdStr.Trim(trimDelimit).Trim().Split(delimiter,2);

                string commentKey = arrComments[0].ToLower();
                if (commentKey.Contains(ResourceClass.LookFor_Name))
                {
                    this.Id = GetRealId(arrComments[arrComments.Length - 1].Trim(trimDelimit));
                }
                if (commentKey.Contains(ResourceClass.LookFor_Section))
                {
                    this.SectionName = GetRealSectionName(arrComments[arrComments.Length - 1].Trim(trimDelimit));
                }
                if (commentKey.Contains(ResourceClass.LookFor_Assertion))
                {
                    this.Assertion = arrComments[arrComments.Length - 1].Trim(trimDelimit);
                }
                if (commentKey.Contains(ResourceClass.LookFor_Description))
                {
                    this.Description = arrComments[arrComments.Length - 1].Trim(trimDelimit);
                }
                if (commentKey.Contains(ResourceClass.LookFor_NegativeStrictMode))
                {
                    this.IsNegativeInStrictMode = true;
                }
                if (commentKey.Contains(ResourceClass.LookFor_Negative))
                {
                    if (!arrComments[0].Contains(ResourceClass.LookFor_NegativeStrictMode)) this.IsNegative = true;
                }
            }


            this.PossibleChecksCount = 1;
        }

        /// <summary>
        /// Reads the Epilogue from the sputnik testscript file
        /// </summary>
        /// <param name="fullFile">Input file content</param>
        private void ReadTestCaseEpilogue(string fullFile)
        {
            char[] delimiter = { ':' };
            char[] trimDelimit = { ';' };
            string holdStr = string.Empty;
            string[] arrComments;

            string commentFormat = ConfigurationManager.AppSettings[ResourceClass.CommentsRegexSettingKey].ToString();
            Regex regx = new Regex(commentFormat);
            MatchCollection matchComments = regx.Matches(fullFile);

            string globalCode = ConfigurationManager.AppSettings[ResourceClass.GlobalCodeRegexKey].ToString();
            Regex gobalRegx = new Regex(globalCode);
            Match matchGlobalCode = gobalRegx.Match(fullFile);

            foreach (Match comment in matchComments)
            {
                holdStr = comment.Value.ToLower();
                arrComments = holdStr.Trim(trimDelimit).Trim().Split(delimiter);

                if (arrComments[0].Contains(ResourceClass.LookFor_Name))
                {
                    this.Id = GetRealId(arrComments[arrComments.Length - 1]);
                }
                if (arrComments[0].Contains(ResourceClass.LookFor_Section))
                {
                    this.SectionName = GetRealSectionName(arrComments[arrComments.Length - 1]);
                }
                if (arrComments[0].Contains(ResourceClass.LookFor_Description))
                {
                    this.Description = arrComments[arrComments.Length - 1];
                }
                
            }

            //string holdGlobalCode = matchGlobalCode.Value;
            //if(holdGlobalCode.StartsWith("*/"))
            //ReplicationCode = holdGlobalCode.Remove(0, holdGlobalCode.IndexOf("*/")).Trim();

            //Get a hint on possible CHECK#'s contained in the file.
            regx = new Regex(ConfigurationManager.AppSettings[ResourceClass.ChecksRegexSettingKey].ToString());
            MatchCollection checks = regx.Matches(fullFile);
            this.PossibleChecksCount = checks.Count;
        }

        private static string GetRealId(string id)
        {
            Regex regx = new Regex("^ S([0-9]+)_");
            return regx.Replace(id, " S$1.0_", 1);
        }
        private static string GetRealSectionName(string sectionName)
        {
            //Regex regx = new Regex("/S([0-9]+)_([^/]+)$");
            Regex regx = new Regex("^ ([0-9]+)$");
            if (! regx.IsMatch(sectionName)) {
                return sectionName;
            }

            return regx.Replace(sectionName, " $1.0", 1);
        }
    }
}
