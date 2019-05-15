using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApplicationSPA.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            // TODO otmohimi add test ajax request
            return PartialView();
        }

        public ActionResult Contact()
        {
            return PartialView();
        }
    }
}