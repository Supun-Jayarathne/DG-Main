using Microsoft.EntityFrameworkCore;

namespace Backend.Application.Context;

public interface IDGDBContext
{
    DbSet<Backend.Domain.Entities.Beach> Beach{get;}

    Task<int> SaveToDbAsync();
}