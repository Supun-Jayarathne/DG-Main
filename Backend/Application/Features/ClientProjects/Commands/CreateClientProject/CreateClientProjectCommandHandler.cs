using Application.Interfaces;
using AutoMapper;
using Backend.Domain.Entities;
using MediatR;

namespace Application.Features.ClientProjects.Commands.CreateClientProject;

public class CreateClientProjectCommandHandler : IRequestHandler<CreateClientProjectRequest, int>
{
    private readonly IDGDBContext _dgDbContext;
    private readonly IMapper _mapper;
    public CreateClientProjectCommandHandler(IDGDBContext dgDbContext,
    IMapper mapper)
    {
        _dgDbContext = dgDbContext;
        _mapper = mapper;
    }
    public async Task<int> Handle(CreateClientProjectRequest request, CancellationToken cancellationToken)
    {
        var newClientProject = _mapper.Map<ClientProject>(request);
        _dgDbContext.ClientProjects.Add(newClientProject);
        await _dgDbContext.SaveToDbAsync();
        return newClientProject.Id;
    }
}