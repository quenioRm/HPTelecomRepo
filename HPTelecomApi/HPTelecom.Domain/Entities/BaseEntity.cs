
using System.ComponentModel.DataAnnotations;

namespace HPTelecom.Domain.Entities
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime created_At { get; set; }
        public DateTime updated_At { get; set; }
    }
}
