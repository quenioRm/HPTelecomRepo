using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Repository;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Implementations
{
    public class PlanPriceNewAddImplementation
        : HPTelecomBaseRepository<PlanPriceNewAddEntity, int>, IPlanPriceNewAddRepository
    {
        public PlanPriceNewAddImplementation(HPTelecomContext hPTelecomContext) : base(hPTelecomContext)
        {
        }

        public async Task<List<PlanPriceNewAddEntity>> GetAllAsync()
        {
            return await _dbset.ToListAsync();
        }
    }
}
