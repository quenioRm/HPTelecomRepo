using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Repository;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Implementations
{
    public class PlanPriceImplementation
        : HPTelecomBaseRepository<PlanPriceEntity, int>, IPlanPriceRepository
    {
        public PlanPriceImplementation(HPTelecomContext hPTelecomContext)
        : base(hPTelecomContext)
        {
        }

        public async Task<List<PlanPriceEntity>> GetAll(int? takeCount)
        {
            if(takeCount > 0)
                return await _dbset.Take((int)takeCount).ToListAsync();

            return await _dbset.ToListAsync();
        }
    }
}
