using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Configuration;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Runtime.Serialization.Formatters;

//this version has been modified to not split each #check into an individual test

namespace Microsoft.Sputnik.Interop.ParserEngine
{
    public static class ES5TestScript
    {
        private static int fileCounter;        
        private static StringBuilder negativeTestCases;

        private static string[] templates = {


           ES5TestScript.GetTemplateFile(ResourceClass.BasicTemplate_FileName),
           ES5TestScript.GetTemplateFile(ResourceClass.BasicPrereqTemplate_FileName),
           ES5TestScript.GetTemplateFile(ResourceClass.BasicNegativeTemplate_FileName),
           ES5TestScript.GetTemplateFile(ResourceClass.BasicNegativePrereqTemplate_FileName)
         };

        /// <summary>
        /// Output files counter
        /// </summary>
        public static int OutputFileCounter
        {
            get
            {
                return fileCounter;
            }
            set
            {
                fileCounter = value;
            }
        }
        /// <summary>
        /// Method to save the sputnik scripts in ES5 format
        /// </summary>
        /// <param name="script">SputnikTestScript Object which will have all the details to be written to the file</param>
        /// <param name="destinationPath">Is the destination folder path</param>
        public static void Save(SputnikTestScript script, string root, string destinationPath)
        {
            int indexOfRoot = script.FullPath.IndexOf(root, StringComparison.InvariantCulture);
            string pathFromRoot = script.FullPath.Substring(indexOfRoot, script.FullPath.Length - indexOfRoot);
            string destDir = Path.Combine(destinationPath, Path.GetDirectoryName(pathFromRoot));
            string positiveDestDir = destDir.Replace("conformance", "");
            string negativeDestDir = destDir.Replace("conformance", "GlobalScope");
 //           int fileCounter = 0;
            string buildContent = string.Empty;
            string destFullPath = string.Empty;
            string preCondition = string.IsNullOrEmpty(script.PreConditionCode) ? String.Empty : script.PreConditionCode;
            int templateIndex = string.IsNullOrEmpty(preCondition) ? 0 : 1;
            string body = script.Body;
            if (script.IsNegative)
            {
                templateIndex += 2;
                destDir = negativeDestDir;                
                //if (!body.Contains("eval(")) body = WrapWithEval(body);
            }
            else
            {
                destDir = positiveDestDir;
            }
            string template = templates[templateIndex];
            Logger.WriteToLog("=====================================================================================");
            Logger.WriteToLog("Source file={0}\n", script.FullPath);
 //           Logger.WriteToLog("Possible CHECK#s={0}\n", script.PossibleChecksCount.ToString());
 //           Logger.WriteToLog("Actual CHECK#s found={0}\n", script.Checks.Length.ToString());
            Logger.WriteToLog("Destination(s)=");
            if (script.Id == "")
            {
                Console.Write(script.Header);
                Console.WriteLine();
            }

  //          OutputFileCounter = OutputFileCounter + script.ConvertedFileCount;
  //          foreach (string check in script.Checks)
  //          {
            
                string[] args = { script.Header, script.Id, script.SectionName, InsertStringEscapes(script.Assertion), InsertStringEscapes(script.Description), script.ReplicationCode, body, preCondition, script.InitialComment };
 //               ++fileCounter;
//                if (script.Checks.Length > 1)
 //               {
 //                   destFullPath = Path.Combine(destDir, string.Format(@"{0}-{1}.js", script.Id, fileCounter.ToString()));
 //                   args[0] = args[0] + "-" + fileCounter.ToString();
//                }
//                else
//                {
                    destFullPath = Path.Combine(destDir, string.Format(@"{0}.js", script.Id));
//                }
                try
                {
                    buildContent = string.Format(template, args);
                    string dirPath = Path.GetDirectoryName(destFullPath);
                    if (!Directory.Exists(dirPath))
                        Directory.CreateDirectory(dirPath);
                    using (TextWriter writeTestCase = File.CreateText(destFullPath))
                    {
                        writeTestCase.WriteLine(buildContent);
                        writeTestCase.Flush();
                        writeTestCase.Close();
                        OutputFileCounter++;
                    }

                    if (script.IsNegative)
                    {
                        //Add details in stringbuilder.
                        string folderPath = GetPartialPath(destFullPath,3);
                        StringBuilder sb = new StringBuilder();
                        sb.Append("\"GlobalScope/" + script.SectionName + "/" + script.Id + ".js\"");
                        //negativeTestCases.Append("\""+folderPath+"\"");
                        sb.Append(":");
                        string s = GetSerializedSputnikTestScript(new SputnikTestScript()
                                                                        {
                                                                            Description = script.Description,
                                                                            Assertion = script.Assertion,
                                                                        });
                        sb.Append(s.Substring(0, s.LastIndexOf('}')) + ",\"negative\":\"syntax\"}");

                        if (negativeTestCases == null)
                            negativeTestCases = new StringBuilder();
                        else
                            negativeTestCases.Append(",");
                        negativeTestCases.Append(sb.ToString());
                    }

                    Logger.WriteToLog(destFullPath);
                }
                catch (ArgumentException ex)
                {
                    Logger.WriteToLog(ResourceClass.IOException, ex.Message);
                }
                catch (IOException ex)
                {
                    Logger.WriteToLog(ResourceClass.IOException, ex.Message);
                }
 //           }
        }

        /// <summary>
        /// Method to initialize the negative test record.
        /// </summary>
        /// <param name="destination">Is the destination folder path</param>
        public static void InitGlobals(string destination)
        {            
            //Insert inital var name in Globals.js file.
            //FileStream fs = new FileStream("c:\\ecmascript\\GlobalScope.js", FileMode.Create, FileAccess.Write);
            if (!Directory.Exists(destination))
            {
                Directory.CreateDirectory(destination);
            }
            FileStream fs = new FileStream(destination + "\\GlobalScope.js", FileMode.Create, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            sw.Write("var GlobalScopeTests =");
            sw.Flush();
            sw.Close();
            fs.Close();
            //negativeTestCases = new StringBuilder();
        }

        /// <summary>
        /// Method to update the GlobalScope.js
        /// </summary>
        /// <param name="destination">Is the destination folder path</param>
        public static void UpdateGlobals(string destination)
        {
            //Replace the last comma by closing curly brace and semi-colon.
            //negativeTestCases.Replace(",", "};", negativeTestCases.Length - 2, 2);
            //negativeTestCases.Append(";");
            //File.AppendAllText("c:\\temp\\GlobalScope.js", "{"+negativeTestCases.ToString()+"};");
            File.AppendAllText(destination +"\\GlobalScope.js", "{" + negativeTestCases.ToString() + "};");

            negativeTestCases.Clear();
        }


        private static string GetSerializedSputnikTestScript(SputnikTestScript sputnikTestScript)
        {
            MemoryStream stream = new MemoryStream();
            DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(SputnikTestScript));
            ser.WriteObject(stream, sputnikTestScript);

            stream.Position = 0;
            StreamReader sr = new StreamReader(stream);

            return sr.ReadToEnd();
        }       

        private static string WrapWithEval(string s)
        {
            return InsertStringEscapes(s, true);
        }

        private static string InsertStringEscapes(string s, bool wrapWithEval=false)
        {
            StringReader rdr=new StringReader(s);
            StringWriter wtr = new StringWriter();
            int intChar;
            char nextChar;
            if (wrapWithEval) wtr.Write("eval(\"");
            while (true)
            {
                intChar = rdr.Read();
                if (intChar == -1) break;
                nextChar = Convert.ToChar(intChar);
                switch (nextChar)
                {
                    case '\\':
                    case '\'':
                    case '"':
                        wtr.Write('\\');
                        wtr.Write(nextChar);
                        break;
                    case '\n':
                        wtr.Write("\\n");
                        break;
                    case '\r':
                        wtr.Write("\\r");
                        break;
                    case '\u2028':
                        wtr.Write("\\u2028");
                        break;
                    case '\u2029':
                        wtr.Write("\\u2029");
                        break;
                    default:
                        wtr.Write(nextChar);
                        break;
                }
            }
            if (wrapWithEval) wtr.Write("\")");
            return wtr.ToString();
        }

        /// <summary>
        /// Method to read the templates which are used to generate a ES5 format files.
        /// </summary>
        /// <returns></returns>
        private static string GetTemplateFile(string configSetting)
        {
            string inputTemplatePath = ConfigurationManager.AppSettings[configSetting].ToString();
            return  (new StreamReader(inputTemplatePath)).ReadToEnd();
        }

        private static string GetPartialPath(string fullPath, int levelsRequired)
        {
            string remainingString = fullPath;
            string[] partialPaths = new string[levelsRequired];
            string finalPath = "GlobalScope";

            for (int iterator = 0; iterator < levelsRequired; iterator++)
            {
                partialPaths[iterator] = remainingString.Substring(remainingString.LastIndexOf(@"\"));
                remainingString = remainingString.Substring(0, remainingString.LastIndexOf(@"\"));
            }

            for (int iterator = partialPaths.Length - 1; iterator >= 0; iterator--)
            {
                finalPath += partialPaths[iterator];                
            }
            //finalPath = finalPath.Replace(@"\/", "/");
            return finalPath;
        }
    }
}
