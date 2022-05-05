using HPTelecom.Domain.Entities;
using HPTelecom.Domain.Interfaces.Dtos;
using HPTelecom.Domain.Interfaces.Repository;
using HPTelecom.Domain.Interfaces.Services;
using HPTelecom.Domain.Notification;

namespace HPTelecom.Service.Services
{
    public class CepAvailableService : ICepAvailableService
    {
        private ICepAvailableRepository _cepAvailableRepository;
        private ICheckAvailabilityRepository _checkAvailabilityRepository;

        public CepAvailableService(
            ICepAvailableRepository cepAvailableRepository,
            ICheckAvailabilityRepository checkAvailabilityRepository
            )
        {
            _cepAvailableRepository = cepAvailableRepository;
            _checkAvailabilityRepository = checkAvailabilityRepository;
        }

        public async Task<Output<object>> CheckIfCepIsAvailable(CepAvailableDto cepAvailableDto)
        {
            var output = new Output<object>();
            var result = await _cepAvailableRepository.FindCep(cepAvailableDto.Cep);
            if (result == null)
            {
                output.Result = new
                {
                    code = "general_error",
                    message = "Não temos disponibilidade para o seu endereço, gostaria de saber quando tivermos cobertura em sua rua?"
                };
                return output;
            }

            output.Result = new
            {
                code = "general_success",
                message = "Temos disponibilidade para sua região, por favor contate o suporte."
            };

            return output;
        }

        public async Task<Output<object>> CheckAvailability(CheckAvailabilityDto form)
        {
            var output = new Output<object>();

            var check = new CheckAvailabilityEntity
            {
                name = form.Name,
                cep = form.Cep,
                telephone = form.Telephone,
                createdAt = DateTime.Now
            };
            await _checkAvailabilityRepository.InsertAsync(check);

            output.Result = new
            {
                code = "general_success",
                message = "Cadastro realizado com sucesso, assim que tivermos novidades entraremos em contato."
            };

            return output;
        }
    }
}
