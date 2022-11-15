using HPTelecom.Domain.Interfaces.Dtos;
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
        [Route("FindPlan")]
        public async Task<object> FindPlan(int id)
        {
            try
            {
                var output = await _webService.FindPlan(id);
                return Ok(output);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("GetNewPlans")]
        public async Task<object> GetNewPlans()
        {
            try
            {
                var output = await _webService.GetNewPlans();
                return Ok(output);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
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

        [HttpGet]
        [AllowAnonymous]
        [Route("GetRelevantPlans")]
        public async Task<object> GetRelevantPlans()
        {
            try
            {
                var output = await _webService.GetRelevantPlans();
                return Ok(output);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("GetPromos")]
        public async Task<object> GetPromos()
        {
            try
            {
                var output = await _webService.GetPromos();
                return Ok(output);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("GetGoogleComents")]
        public async Task<object> GetGoogleComents()
        {
            try
            {
                var output = await _webService.GetGoogleComents();
                return Ok(output);
            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest, e.Message);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("SendPurchaseRequestMail")]
        public async Task<object> SendPurchaseRequestMail([FromForm] SendPurchaseRequestDto form)
        {
            try
            {
                var output = await _webService.SendPurchaseRequestMail(form);
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
