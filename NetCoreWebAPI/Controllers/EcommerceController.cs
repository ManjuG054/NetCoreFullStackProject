using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreWebAPI.Controllers
{
    [Route("[controller]/products")]
    [ApiController]
    public class EcommerceController : ControllerBase
    {
        [HttpPost]
        public ActionResult Insert()
        {
            bool badHappened = true;
            if (badHappened)
                return BadRequest();
            return NoContent();
        }
        [HttpPut("{id}")]
        public ActionResult Update (string id)
        {
            bool badHappened = true;
            if (badHappened)
                return BadRequest();
            return NoContent();
        }
        [HttpGet]
        public ActionResult Get()
        {
            bool itemPresent = false;
            if (itemPresent)
                return NotFound();
            return Ok(DataAccessLayer.ConnectToDatabase.GetProducts());
        }

        [HttpDelete("all")] // "products/all"
        public ActionResult Delete()
        {
            bool badHappened = true;
            if (badHappened)
                return BadRequest();
            return NoContent();
        }

        [HttpDelete("{{id}}")] // "products/id"
        public ActionResult Delete(string id)
        {
            bool badHappened = true;
            if (badHappened)
                return BadRequest();
            return NoContent();
        }
    }
}
