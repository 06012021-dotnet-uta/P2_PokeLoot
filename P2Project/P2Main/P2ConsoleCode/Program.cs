using System;
using System.Net.Http;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using P2DbContext.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;
using BusinessLayer;

namespace P2ConsoleTesting
{
    class Program
    {
        public static HttpClient ApiClient { get; set; } = new HttpClient();


        static void Main(string[] args)
        {
            

            P2DbClass context = new P2DbClass();


            

        }


        
    }
}
