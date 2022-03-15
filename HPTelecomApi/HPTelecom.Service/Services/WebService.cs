using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Service.Services
{
    public class WebService : IWebService
    {
        private IPlanPriceRepository _planPriceRepository;
        private IPromotionsRepository _promotionsRepository;
        public WebService(
            IPlanPriceRepository planPriceRepository, 
            IPromotionsRepository promotionsRepository
            )
        {
            _planPriceRepository = planPriceRepository;
            _promotionsRepository = promotionsRepository;
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
    }
}
