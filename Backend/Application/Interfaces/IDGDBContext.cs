using Backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Interfaces;

public interface IDGDBContext
{
    DbSet<Beach> Beach { get; }
    DbSet<ClientProject> ClientProjects { get; }
    DbSet<ProjectStatus> ProjectStatuses { get; }

    Task<int> SaveToDbAsync(CancellationToken cancellationToken = new CancellationToken());
}