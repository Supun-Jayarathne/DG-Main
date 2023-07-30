using FluentValidation;

namespace Application.Features.ClientProjects.Commands.CreateClientProject;

public class CreateClientProjectValidator : AbstractValidator<CreateClientProjectRequest>
{
    public CreateClientProjectValidator()
    {
        RuleFor(x => x.Name).NotEmpty();
    }

}