using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Domain.Interfaces.Repository
{
    public interface IPlanPriceNewAddRepository : IRepository<PlanPriceNewAddEntity, int>
    {
        Task<List<PlanPriceNewAddEntity>> GetAllAsync();
    }
}
