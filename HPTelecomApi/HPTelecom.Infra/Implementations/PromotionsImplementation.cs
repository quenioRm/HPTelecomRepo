using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Repository;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Implementations
{
    public class PromotionsImplementation
        : HPTelecomBaseRepository<PromotionsEntity, int>, IPromotionsRepository
    {
        public PromotionsImplementation(HPTelecomContext hPTelecomContext)
        : base(hPTelecomContext)
        {
        }

        public async Task<PromotionsEntity> Get()
        {
            return await _dbset.FirstOrDefaultAsync();
        }
    }
}
