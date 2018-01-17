using Microsoft.AspNetCore.Mvc;

namespace Comments.Controllers
{
    [Route("api/health")]
    public class HealthController : Controller
    {
        // GET api/health
        [HttpGet]
        public JsonResult GetHealth()
        {
            return new JsonResult("Healthy");
        }
    }
}