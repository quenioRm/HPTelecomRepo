using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Infra.Context;
using HPTelecom.Infra.Repository;
using Microsoft.EntityFrameworkCore;

namespace HPTelecom.Infra.Implementations
{
    public class CepAvailableImplementation
        : HPTelecomBaseRepository<CepAvailableEntity, Guid>, ICepAvailableRepository
    {
        public CepAvailableImplementation(HPTelecomContext hPTelecomContext)
        : base(hPTelecomContext)
        {
        }

        public async Task<CepAvailableEntity> FindCep(string cep)
        {
            return await _dbset.Where(x => x.cep.Equals(cep)).FirstOrDefaultAsync();
        }
    }
}
