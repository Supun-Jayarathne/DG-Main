using Domain.Enums;
using MediatR;

namespace Application.Features.ClientProjects.Commands.UpdateClientProject;
public class UpdateClientProjectRequest : IRequest<int>
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Company { get; set; }
    public string? Email { get; set; }
    public string Url { get; set; }
    public bool Active { get; set; }
    public TrafficStatus? TrafficStatus { get; set; }
    public bool IsUpdatedRequested { get; set; }
    public string? Message { get; set; }
}
