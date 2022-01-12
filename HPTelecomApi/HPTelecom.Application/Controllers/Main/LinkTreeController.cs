using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace HPTelecom.Application.Controllers.Main
{
    [Route("[controller]")]
    [ApiController]
    public class LinkTreeController : Controller
    {
        private readonly ICepAvailableService _cepAvailableService;

        public LinkTreeController(ICepAvailableService cepAvailableService)
        {
            _cepAvailableService = cepAvailableService;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("GetAvailableCep")]
        public async Task<object> GetAvailableCep([FromForm] CepAvailableDto cepAvailableDto)
        {
            try
            {
                var output = await _cepAvailableService.CheckIfCepIsAvailable(cepAvailableDto);
                if (!output.IsValid)
                {
                    return ValidationProblem(output);
                }

                return Ok(output.Result);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }
    }
}
