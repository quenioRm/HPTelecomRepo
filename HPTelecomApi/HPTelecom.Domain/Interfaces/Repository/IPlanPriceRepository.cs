using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Domain.Interfaces.Repository
{
    public interface IPlanPriceRepository : IRepository<PlanPriceEntity, int>
    {
        Task<PlanPriceEntity> Find(int id);
        Task<List<PlanPriceEntity>> GetNewPlans();
        Task<List<PlanPriceEntity>> GetAll(int? takeCount);
        Task<List<PlanPriceEntity>> GetRelevantPrices();
        Task<PlanPriceEntity> FindPlan(int id);
    }
}
