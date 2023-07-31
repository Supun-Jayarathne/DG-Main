
using Application.Features.ClientProjects.Commands.CreateClientProject;
using FluentValidation;

namespace Application.Features.ClientProjects.Commands.UpdateClientProject;

public class UpdateClientProjectValidator : AbstractValidator<CreateClientProjectRequest>
{
    public UpdateClientProjectValidator()
    {
        RuleFor(x => x.Name).NotEmpty();
    }

}