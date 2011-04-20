using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace Microsoft.Sputnik.Interop.ParserEngine
{
    class Program
    {
        static void Main(string[] args)
        {
            string source = string.Empty;
            string destination = string.Empty;

            if (args == null || args.Length < 2)
            {
                return;
            }
            source = args[0];
            destination = args[1];

            string root = "conformance";

            int countInputFiles = 0;
            try
            {
                Logger.WriteToLog("Start Time : {0}", DateTime.Now.ToString());
                if (Directory.Exists(source))
                {
                    string[] filePaths = Directory.GetFiles(source, "*.js", SearchOption.AllDirectories);
                    ES5TestScript.InitGlobals(destination);

                    foreach (string filePath in filePaths)
                    {
                        SputnikTestScript testScript = new SputnikTestScript();
                        testScript.Load(filePath, root);
                        ES5TestScript.Save(testScript, root, destination);
                        countInputFiles++;
                    }

                    ES5TestScript.UpdateGlobals(destination);
                }
                Logger.WriteToLog(ResourceClass.Total_Input_Files, countInputFiles.ToString());
                Logger.WriteToLog(ResourceClass.Total_Output_Files, ES5TestScript.OutputFileCounter.ToString());
                Console.WriteLine(ResourceClass.Total_Input_Files, countInputFiles.ToString());
                Console.WriteLine(ResourceClass.Total_Output_Files, ES5TestScript.OutputFileCounter.ToString());
                Console.WriteLine(ResourceClass.PressExit);
                Logger.WriteToLog("End Time : {0}", DateTime.Now.ToShortDateString());
                Console.ReadLine();
            }
            finally
            {
                Logger.Dispose();
            }

        }
    }
}
