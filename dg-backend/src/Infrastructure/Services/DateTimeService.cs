using dg_backend.Application.Common.Interfaces;

namespace dg_backend.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
