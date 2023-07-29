using Domain.Enums;
using MediatR;

namespace Application.Features.ClientProjects.Commands.CreateClientProject;
public class CreateClientProjectRequest : IRequest<int>
{
    public string Name { get; set; }
    public string? Company { get; set; }
    public string? Email { get; set; }
    public string Url { get; set; }
    public bool Active { get; set; }
    public TrafficStatus? TrafficStatus { get; set; }
    public bool IsUpdatedRequested { get; set; }
}
