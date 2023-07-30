using Application.Interfaces;
using Backend.Domain.Entities;
using Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Context;

public class DGDBContext : DbContext,IDGDBContext
{
    private readonly IDateTimeService _dateTime;
    public DGDBContext(DbContextOptions<DGDBContext> options):base(options)
    {
        
    }
    public DbSet<Beach> Beach {get;set;}

    public DbSet<ClientProject> ClientProjects  { get;set;}

    public DbSet<ProjectStatus> ProjectStatuses { get; set; }

    public Task<int> SaveToDbAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        foreach (var entry in ChangeTracker.Entries<AuditableBaseEntity>())
        {
            switch (entry.State)
            {
                case EntityState.Added:
                    entry.Entity.Created = DateTime.UtcNow; //_dateTime.NowUtc;
                    //entry.Entity.CreatedBy = _authenticatedUser.UserId;
                    entry.Entity.CreatedBy = "admin";//remove this
                    break;
                case EntityState.Modified:
                    entry.Entity.LastModified = DateTime.UtcNow; //_dateTime.NowUtc;
                    //entry.Entity.LastModifiedBy = _authenticatedUser.UserId;
                    entry.Entity.LastModifiedBy = "admin";//remove this
                    break;
            }
        }
        return base.SaveChangesAsync(cancellationToken);
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        //All Decimals will have 18,6 Range
        foreach (var property in builder.Model.GetEntityTypes()
        .SelectMany(t => t.GetProperties())
        .Where(p => p.ClrType == typeof(decimal) || p.ClrType == typeof(decimal?)))
        {
            property.SetColumnType("decimal(18,6)");
        }
        base.OnModelCreating(builder);
    }
}