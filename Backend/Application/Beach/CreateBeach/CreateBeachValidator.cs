
using FluentValidation;

namespace Backend.Application.Beach.CreateBeach;

public class CreateBeachValidator : AbstractValidator<CreateBeachRequest>
{
    public CreateBeachValidator()
    {
        RuleFor(x => x.BeachName).NotEmpty();
    }

}