using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Domain.Interfaces.Repository
{
    public interface IPlanPriceNewRepository : IRepository<PlanPriceNewEntity, int>
    {
        Task<List<PlanPriceNewEntity>> GetAllAsync();
    }
}
