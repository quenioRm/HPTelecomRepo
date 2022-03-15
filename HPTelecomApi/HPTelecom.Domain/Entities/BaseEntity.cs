using System.ComponentModel.DataAnnotations;

namespace HPTelecom.Domain.Entities
{
    public abstract class BaseEntity<T>
    {
        [Key]
        public T Id { get; set; }
    }
}
