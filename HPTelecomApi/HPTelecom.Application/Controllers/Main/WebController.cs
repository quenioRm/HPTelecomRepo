using HPTelecom.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HPTelecom.Application.Controllers.Main
{
    [Route("[controller]")]
    [ApiController]
    public class WebController : Controller
    {
        private readonly IWebService _webService;
        public WebController(IWebService webService)
        {
            _webService = webService;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("GetPlans/{takeCount}")]
        public async Task<object> GetPlans(int takeCount)
        {
            try
            {
                var output = await _webService.GetPlans(takeCount);
                return Ok(output);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }
    }
}
