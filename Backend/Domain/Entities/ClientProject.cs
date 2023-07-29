using Domain.Common;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain.Entities
{
    public class ClientProject : AuditableBaseEntity
    {
        public ClientProject()
        {
            ProjectStatuses = new List<ProjectStatus>();
        }
        public string Name { get; set; }
        public string? Company { get; set; }
        public string? Email { get; set; }
        public string Url { get; set; }
        public bool Active { get; set; }
        public TrafficStatus? TrafficStatus { get; set; }
        public bool IsUpdatedRequested { get; set; }
        public List<ProjectStatus> ProjectStatuses { get; set; }
    }
}
