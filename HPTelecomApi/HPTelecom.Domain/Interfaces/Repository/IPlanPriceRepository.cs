using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Domain.Interfaces.Repository
{
    public interface IPlanPriceRepository : IRepository<PlanPriceEntity, int>
    {
        Task<List<PlanPriceEntity>> GetAll(int? takeCount);
        Task<List<PlanPriceEntity>> GetRelevantPrices();
        Task<PlanPriceEntity> FindPlan(int id);
    }
}
