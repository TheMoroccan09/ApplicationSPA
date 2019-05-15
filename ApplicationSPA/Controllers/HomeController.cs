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
            return this.getView();
        }

        public ActionResult Contact()
        {
            return this.getView();
        }
        // TODO otmohimi move this to an Interface controller
        private ActionResult getView() {
            if (Request.IsAjaxRequest())
                return PartialView();

            return View("~/Views/Home/Index.cshtml");
        }
    }
}