using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Service.Services
{
    public class WebService : IWebService
    {
        private IPlanPriceRepository _planPriceRepository;
        public WebService(IPlanPriceRepository planPriceRepository)
        {
            _planPriceRepository = planPriceRepository;
        }

        public async Task<object> GetPlans(int takeCount)
        {
            var plans = await _planPriceRepository.GetAll(takeCount);
            return plans;
        }
    }
}
