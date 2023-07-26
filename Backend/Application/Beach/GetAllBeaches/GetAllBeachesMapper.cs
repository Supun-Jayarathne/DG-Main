using AutoMapper;

namespace Backend.Application.Beach.GetAllBeaches;
public class GetAllBeachesMapper:Profile
{
    public GetAllBeachesMapper()
    {
        CreateMap<Backend.Domain.Entities.Beach,GetAllBeachesResponse>();
    }
}
