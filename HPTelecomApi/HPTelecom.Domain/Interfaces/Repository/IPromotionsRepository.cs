using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Domain.Interfaces.Repository
{
    public interface IPromotionsRepository : IRepository<PromotionsEntity, int>
    {
        Task<PromotionsEntity> Get();
    }
}
