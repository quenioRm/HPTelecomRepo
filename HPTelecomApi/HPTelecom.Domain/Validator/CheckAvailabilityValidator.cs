﻿using FluentValidation;
using HPTelecom.Domain.Interfaces.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace HPTelecom.Domain.Validator
{
    public class CheckAvailabilityValidator : AbstractValidator<CheckAvailabilityDto>
    {
        public CheckAvailabilityValidator()
        {

            RuleFor(x => x.Name).NotNull()
                .WithMessage("O campo {PropertyName} é obrigatório")
                .WithName("Nome");

            RuleFor(x => x.Name).NotEmpty()
                .WithMessage("O campo {PropertyName} é obrigatório")
                .WithName("Nome");

            RuleFor(p => p.Telephone)
               .NotEmpty().WithMessage("O campo {PropertyName} é obrigatório")
               .NotNull().WithMessage("O campo {PropertyName} é obrigatório")
               .MinimumLength(10).WithMessage("O Campo telefone não deve ter menos de 10 caracteres.")
               .MaximumLength(20).WithMessage("O Campo telefone não deve ter menos de 20 caracteres.")
               .Matches(new Regex(@"^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$"))
               .WithMessage("O campo {PropertyName} é inválido.")
               .WithName("Telefone");

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
