using System.ComponentModel.DataAnnotations;

namespace HPTelecom.Domain.Entities
{
    public abstract class BaseEntity<T>
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
    }
}
