using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Domain.Interfaces.Services;
using HPTelecom.Domain.Notification;

namespace HPTelecom.Service.Services
{
    public class CepAvailableService : ICepAvailableService
    {
        private ICepAvailableRepository _cepAvailableRepository;
        public CepAvailableService(
            ICepAvailableRepository cepAvailableRepository
            )
        {
            _cepAvailableRepository = cepAvailableRepository;
        }

        public async Task<Output<object>> CheckIfCepIsAvailable(CepAvailableDto cepAvailableDto)
        {
            var output = new Output<object>();
            var result = await _cepAvailableRepository.FindCep(cepAvailableDto.Cep);
            if (result == null)
            {
                output.AddError(nameof(cepAvailableDto.Cep), "Não existe disponibilidade em sua região, por favor aguarde ou contate o suporte.");
                return output;
            }

            output.Result = new
            {
                code = "general_success",
                message = "Temos disponibilidade para sua região, por favor contate o suporte."
            };

            return output;
        }
    }
}
