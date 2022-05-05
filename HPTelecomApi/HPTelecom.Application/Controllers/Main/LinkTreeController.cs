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
        private readonly IWebService _webService;

        public LinkTreeController(ICepAvailableService cepAvailableService, IWebService webService)
        {
            _cepAvailableService = cepAvailableService;
            _webService = webService;
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

        [HttpPost]
        [AllowAnonymous]
        [Route("CheckAvailability")]
        public async Task<object> CheckAvailability([FromForm] CheckAvailabilityDto form)
        {
            try
            {
                var output = await _cepAvailableService.CheckAvailability(form);
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

        [HttpPost]
        [AllowAnonymous]
        [Route("SendMail")]
        public async Task<object> SendMail([FromForm] SendMailDto form)
        {
            try
            {
                var output = await _webService.SendMail(form);
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
