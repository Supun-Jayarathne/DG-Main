using Application.Features.ProjectStatuses.Commands.CreateProjectStatus;
using Application.Interfaces;
using AutoMapper;
using Backend.Domain.Entities;
using MediatR;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Application.Features.ClientProjects.Commands.UpdateClientProject;

public class UpdateClientProjectCommandHandler : IRequestHandler<UpdateClientProjectRequest, int>
{
    private readonly IDGDBContext _dgDbContext;
    private readonly IMapper _mapper;
    private readonly IMediator _mediator;
    public UpdateClientProjectCommandHandler(IDGDBContext dgDbContext,
    IMapper mapper, IMediator mediator)
    {
        _dgDbContext = dgDbContext;
        _mapper = mapper;
        _mediator = mediator;
    }
    public async Task<int> Handle(UpdateClientProjectRequest request, CancellationToken cancellationToken)
    {
        var clientProject = _dgDbContext.ClientProjects.Where(a => a.Id == request.Id).FirstOrDefault();
        if (clientProject == null)
        {
            return default;
        }
        else
        {
            if (request.Message != null)
            {
                var statusRequest = new CreateProjectStatusRequest();
                statusRequest.Message = request.Message;
                statusRequest.ClientId = request.Id;

                await _mediator.Send(statusRequest);
            }
            clientProject.Name = request.Name;
            clientProject.Company = request.Company;
            clientProject.Email = request.Email;
            clientProject.Url = request.Url;
            clientProject.Active = request.Active;
            clientProject.TrafficStatus = request.TrafficStatus;
            clientProject.IsUpdatedRequested = request.IsUpdatedRequested;
            await _dgDbContext.SaveToDbAsync();
            return clientProject.Id;
        }
    }
}