using System;
using Xunit;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using P2DbContext.Models;
using BusinessLayer;
using System.Collections.Generic;

namespace UnitTests
{
    public class UnitTest1
    {

        DbContextOptions<P2DbClass> options = new DbContextOptionsBuilder<P2DbClass>().UseInMemoryDatabase(databaseName: "TestingDb").Options;

        [Fact]
        public void Test1()
        {
            // Arange

            // Act
            using (var context = new P2DbClass(options))    // creates in memory database
            {
                

                // Assert
                
            }
        }
    }
}
