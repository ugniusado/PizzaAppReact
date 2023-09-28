using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class TestController : ControllerBase
{
    [HttpPost]
    public IActionResult PostTest()
    {
        return Ok("Post method in TestController hit successfully!");
    }
}
