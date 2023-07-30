using Domain.Enums;
using MediatR;

namespace Application.Features.ProjectStatuses.Commands.CreateProjectStatus;
public class CreateProjectStatusRequest : IRequest<int>
{
    public string Message { get; set; }
    public int ClientProjectId { get; set; }

}
