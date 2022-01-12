using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Notification;

namespace HPTelecom.Domain.Interfaces.Services
{
    public interface ICepAvailableService
    {
        Task<Output<object>> CheckIfCepIsAvailable(CepAvailableDto cepAvailableDto);
    }
}
