using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Services;

namespace HPTelecom.Domain.Interfaces.Repository
{
    public interface ICepAvailableRepository : IRepository<CepAvailableEntity, Guid>
    {
        Task<CepAvailableEntity> FindCep(string cep);
    }
}
