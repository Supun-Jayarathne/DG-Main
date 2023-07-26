using AutoMapper;
using AutoMapper.QueryableExtensions;
using Backend.Application.Context;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Backend.Application.Beach.GetAllBeaches;

public class GetAllBeachesQueryHandler : IRequestHandler<GetAllBeachesRequest, List<GetAllBeachesResponse>>
{
    private readonly IDGDBContext _myWorldDbContext;
    private readonly IMapper _mapper;
    public GetAllBeachesQueryHandler(IDGDBContext myWorldDbContext,
    IMapper mapper)
    {
        _myWorldDbContext = myWorldDbContext;
        _mapper = mapper;
    }
    public Task<List<GetAllBeachesResponse>> Handle(GetAllBeachesRequest request, CancellationToken cancellationToken)
    {
        return _myWorldDbContext.Beach.ProjectTo<GetAllBeachesResponse>(_mapper.ConfigurationProvider)
        .ToListAsync();
    }
}