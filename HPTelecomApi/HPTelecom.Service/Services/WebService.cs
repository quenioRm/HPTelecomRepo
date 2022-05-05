using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Domain.Interfaces.Services;
using HPTelecom.Domain.Notification;

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
    }
}
