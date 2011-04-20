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
        public bool negativeTest = false;
        private bool strictModeNegativeTest = false;
        private const string xmlNode = "format";
        private const string xmlAttribute = "sequence";
        private string[] checkSections;
        private SortedDictionary<string, string> testScriptFormats = new SortedDictionary<string, string>();

        public string Header = string.Empty;
        public string Body = string.Empty;
        public string InitialComment = string.Empty;
        public string pathFromRoot = string.Empty;

        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>       
        [DataMember]
        public string id
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
        [DataMember]
        public string path
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
        public string description
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
        public string assertion
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
        public void Load(string filePath, string root)
        {
            string[] regexTrimDelimiter = { "\n","\r"};            
            String fullFile = string.Empty;

            using (TextReader txtReader = new StreamReader(filePath))
            {
                fullFile = txtReader.ReadToEnd();
            }
            this.FullPath = filePath;
            int indexOfRoot = this.FullPath.IndexOf(root, StringComparison.InvariantCulture) + root.Length + 1;
            this.pathFromRoot = this.FullPath.Substring(indexOfRoot, this.FullPath.Length - indexOfRoot);

            Regex regx = new Regex("\\\\S([0-9]+)_([^\\\\]+)\\.js$");
            if (regx.IsMatch(this.pathFromRoot))
            {
                Match tempMatch = regx.Match(this.pathFromRoot);
                String tempDir = "\\" + tempMatch.Groups[1].Value + ".0_Chapter";
                this.pathFromRoot = regx.Replace(this.pathFromRoot, tempDir + "\\S$1.0_$2.js");
            }
            ReadSimpleTestCase(fullFile);
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

            string commentFormat = "@[a-zA-Z0-9_]+(:\\s*[^\\r\\n]*)?;?\\s*(\\r|\\n)";
            Regex regx = new Regex(commentFormat);
            MatchCollection matchComments = regx.Matches(this.Header);

            foreach (Match comment in matchComments)
            {
                holdStr = comment.Value;
                arrComments = holdStr.Trim(trimDelimit).Trim().Split(delimiter,2);

                string commentKey = arrComments[0].ToLower();
                if (commentKey.Contains(ResourceClass.LookFor_Name))
                {
                    this.id = this.pathFromRoot.Substring(this.pathFromRoot.LastIndexOf("\\") + 1);
                    this.id = this.id.Remove(this.id.Length - 3);
                }
                if (commentKey.Contains(ResourceClass.LookFor_Section))
                {
                    this.path = this.pathFromRoot;
                }
                if (commentKey.Contains(ResourceClass.LookFor_Assertion))
                {
                    this.assertion = arrComments[arrComments.Length - 1].Trim(trimDelimit);
                }
                if (commentKey.Contains(ResourceClass.LookFor_Description))
                {
                    this.description = arrComments[arrComments.Length - 1].Trim(trimDelimit);
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
    }
}
