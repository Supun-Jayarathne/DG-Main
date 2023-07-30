using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain.Entities
{
    public class ProjectStatus : AuditableBaseEntity
    {
        public string? Message { get; set; }
        public int? ClientProjectId { get; set; }

        public ClientProject ClientProject { get; set; }
    }
}
