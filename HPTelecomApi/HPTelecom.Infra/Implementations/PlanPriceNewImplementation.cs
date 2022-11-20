using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Repository;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Implementations
{
    public class PlanPriceNewImplementation
        : HPTelecomBaseRepository<PlanPriceNewEntity, int>, IPlanPriceNewRepository
    {
        public PlanPriceNewImplementation(HPTelecomContext hPTelecomContext) : base(hPTelecomContext)
        {
        }

        public async Task<List<PlanPriceNewEntity>> GetAllAsync()
        {
            return await _dbset.ToListAsync();
        }
    }
}
