using Application.Interfaces;
using AutoMapper;
using Backend.Domain.Entities;
using MediatR;

namespace Application.Features.ProjectStatuses.Commands.CreateProjectStatus;

public class CreateProjectStatusCommandHandler : IRequestHandler<CreateProjectStatusRequest, int>
{
    private readonly IDGDBContext _dgDbContext;
    private readonly IMapper _mapper;
    public CreateProjectStatusCommandHandler(IDGDBContext dgDbContext,
    IMapper mapper)
    {
        _dgDbContext = dgDbContext;
        _mapper = mapper;
    }
    public async Task<int> Handle(CreateProjectStatusRequest request, CancellationToken cancellationToken)
    {
        var newProjectStatus = _mapper.Map<ProjectStatus>(request);
        newProjectStatus.ClientId = request.ClientId; 
        _dgDbContext.ProjectStatuses.Add(newProjectStatus);
        await _dgDbContext.SaveToDbAsync();
        return newProjectStatus.Id;
    }
}