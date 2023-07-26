using AutoMapper;

namespace Backend.Application.Beach.CreateBeach;

public class CreateBeachMapper:Profile
{
    public CreateBeachMapper()
    {
        CreateMap<CreateBeachRequest, Backend.Domain.Entities.Beach>();
    }
}