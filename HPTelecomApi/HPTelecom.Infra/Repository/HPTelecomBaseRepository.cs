using HPTelecom.Domain.Entities;
using HPTelecom.Infra.Context;

namespace HPTelecom.Infra.Repository
{
    public class HPTelecomBaseRepository<T, T2> : BaseRepository<T, T2>
        where T : BaseEntity<T2>
    {
        public HPTelecomBaseRepository(HPTelecomContext hPTelecomContext)
        : base(hPTelecomContext, hPTelecomContext.Set<T>())
        {
        }
    }
}
