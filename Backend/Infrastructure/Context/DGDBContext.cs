using Backend.Application.Context;
using Backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Context;

public class DGDBContext : DbContext,IDGDBContext
{
    public DGDBContext(DbContextOptions<DGDBContext> options):base(options)
    {
        
    }
    public DbSet<Beach> Beach {get;set;}

    public async Task<int> SaveToDbAsync()
    {
        return await SaveChangesAsync();
    }
}