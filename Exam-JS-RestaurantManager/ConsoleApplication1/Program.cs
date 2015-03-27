using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            var person = new Today({Yes = "no"});
            setName(person);
            Console.WriteLine(person.Yes);
        }

        private static void setName(Today person)
        {
            person.Yes = "yes";

            person = new Today();

            person.Yes = "no";
        }
    }

    public class Today
    {
        public string Yes { get; set; }
    }
}
