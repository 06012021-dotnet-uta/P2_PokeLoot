using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using P2DbContext.Models;
using BusinessLayer;

namespace P2Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class P2Controller : Controller
    {
        private readonly ILogger<P2Controller> _logger;

        private readonly IBusinessModel _businessModel;

        /// <summary>
        /// This constructor is only used for testing
        /// </summary>
        /// <param name="rpsGame">Business model object</param>
        //public P2Controller(IBusinessModel businessModel)
        //{
        //    this._businessModel = businessModel;
        //}

        /// <summary>
        /// Constructor to inject the business layer
        /// </summary>
        /// <param name="businessModel">Business model object</param>
        /// <param name="logger">Logger object</param>
        public P2Controller(IBusinessModel businessModel , ILogger<P2Controller> logger)
        {
            this._businessModel = businessModel;
            this._logger = logger;
        }

        /// <summary>
        /// https://localhost:44307/api/P2/GetDisplayBoard
        /// Return the json object for each post in the database to build the display board
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetDisplayBoard")]
        public List<Post> PlayerList()
        {
            List<Post> playerList = _businessModel.getDisplayBoard();
            return playerList;
        }



    }
}
