using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Repository;

namespace HPTelecom.Infra.Implementations
{
    public class CheckAvailabilityImplementation 
        : HPTelecomBaseRepository<CheckAvailabilityEntity, int>, ICheckAvailabilityRepository
    {
        public CheckAvailabilityImplementation(HPTelecomContext hPTelecomContext)
:       base(hPTelecomContext)
        {
        }
    }
}
