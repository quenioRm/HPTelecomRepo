using FluentValidation;
using HPTelecom.Domain.Interfaces.Dtos;

namespace HPTelecom.Domain.Validator
{
    public class CepAvailableValidator : AbstractValidator<CepAvailableDto>
    {
        public CepAvailableValidator()
        {
            RuleFor(x => x.Cep).NotNull()
                .WithMessage("O campo {PropertyName} é obrigatório")
                .WithName("Cep");

            RuleFor(x => x.Cep).NotEmpty()
                .WithMessage("O campo {PropertyName} é obrigatório")
                .WithName("Cep");

            RuleFor(x => x.Cep).Matches("[0-9]{5}-[0-9]{3}")
                .WithMessage("O campo {PropertyName} aceita apenas o formato 00000-000")
                .WithName("Cep");
        }
    }
}
