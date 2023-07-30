using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.ClientProjects.Queries.GetAllClientProjects;

public class GetAllClientProjectsQueryHandler : IRequestHandler<GetAllClientProjectsRequest, List<GetAllClientProjectsResponse>>
{
    private readonly IDGDBContext _dgDbContext;
    private readonly IMapper _mapper;
    public GetAllClientProjectsQueryHandler(IDGDBContext dgDbContext,
    IMapper mapper)
    {
        _dgDbContext = dgDbContext;
        _mapper = mapper;
    }
    public Task<List<GetAllClientProjectsResponse>> Handle(GetAllClientProjectsRequest request, CancellationToken cancellationToken)
    {
        return _dgDbContext.ClientProjects.ProjectTo<GetAllClientProjectsResponse>(_mapper.ConfigurationProvider)
        .ToListAsync();
    }
}