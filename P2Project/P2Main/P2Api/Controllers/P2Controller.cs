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
    public class P2Controller : Controller
    {
        private readonly ILogger<P2Controller> _logger;

        private readonly IBusinessModel _businessModel;

        public P2Controller(IBusinessModel businessModel , ILogger<P2Controller> logger)
        {
            this._businessModel = businessModel;
            this._logger = logger;
        }

    }
}
