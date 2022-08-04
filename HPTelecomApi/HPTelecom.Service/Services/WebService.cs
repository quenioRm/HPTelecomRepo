using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Interfaces.Dtos.Models;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Domain.Interfaces.Services;
using HPTelecom.Domain.Notification;
using Newtonsoft.Json;
using System.Net;

namespace HPTelecom.Service.Services
{
    public class WebService : IWebService
    {
        private IPlanPriceRepository _planPriceRepository;
        private IPromotionsRepository _promotionsRepository;
        private IMailSenderService _mailSenderService;
        public WebService(
            IPlanPriceRepository planPriceRepository, 
            IPromotionsRepository promotionsRepository,
            IMailSenderService mailSenderService
            )
        {
            _planPriceRepository = planPriceRepository;
            _promotionsRepository = promotionsRepository;
            _mailSenderService = mailSenderService;
        }

        public async Task<object> GetPlans(int takeCount)
        {
            var plans = await _planPriceRepository.GetAll(takeCount);
            return plans;
        }

        public async Task<object> GetRelevantPlans()
        {
            var plans = await _planPriceRepository.GetRelevantPrices();
            return plans;
        }

        public async Task<object> GetPromos()
        {
            var promo = await _promotionsRepository.Get();

            if(promo.finishedAt < DateTime.Now)
            {
                return new
                {
                    status = "finished"
                };
            }

            return promo;
        }

        public async Task<Output<object>> SendMail(SendMailDto form)
        {
            var output = new Output<object>();

            await _mailSenderService.SendMail(form.Name + " - " + form.Telephone, form.Text);

            output.Result = new
            {
                code = "general_success",
                message = "E-mail enviado com sucesso."
            };

            return output;
        }

        public Task<GoogleMapsReview> GetGoogleComents()
        {
            string result = "";

            using (var client = new HttpClient(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate }))
            {
                client.BaseAddress = new Uri("https://maps.googleapis.com/maps/api/place/details/");
                HttpResponseMessage response = client.GetAsync("json?language=pt&key=AIzaSyA4DJHYNhaxuLr-5yeGf5LTM9xD2kWJhqY&placeid=ChIJUTT-FhpPzpQRHXCBRIkB6yw").Result;
                response.EnsureSuccessStatusCode();
                result = response.Content.ReadAsStringAsync().Result;
            }

            var output = JsonConvert.DeserializeObject<GoogleMapsReview>(result);

            return Task.FromResult(output);
        }

        public async Task<Output<object>> SendPurchaseRequestMail(SendPurchaseRequestDto form)
        {
            var output = new Output<object>();

            var plan = await _planPriceRepository.FindPlan(form.PlanId);

            var message = "Fez a solicitação de contato para aquisição do plano " + plan.name + "- R$" +
                          plan.price + ", para o cep :" + form.Cep + " e seu contato de telefone é " + form.Telephone;

            await _mailSenderService.SendPurchaseRequestMail(
                form.Name,
                "Aquisição de plano de internet",
                form.Text,
                message);

            output.Result = new
            {
                code = "general_success",
                message = "E-mail enviado com sucesso, aguarde pois iremos entrar em contato."
            };

            return output;
        }
    }
}
